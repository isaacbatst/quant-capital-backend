import {type Contract} from '../../domain/entities/Contract/Contract';
import {type ContractRateType} from '../../domain/entities/Contract/ContractRate';
import {type ContractVersion, type ContractVersionTransactions, type ContractVersionType} from '../../domain/entities/Contract/ContractVersion';
import {AuthError} from '../../domain/errors/AuthError';
import {type AccountRepository} from '../../infra/persistance/repositories/AccountRepository';
import {type ContractRepository} from '../../infra/persistance/repositories/ContractRepository';
import {type RepositoryFactory} from '../../infra/persistance/repositories/RepositoryFactory';

type Input = {
	sessionToken: string;
};

type OutputTransaction = {
	id: string;
	date: string;
	value: number;
};

type OutputVersion = {
	startDate: string;
	dueDate: string;
	type: ContractVersionType;
	rate: {
		value: number;
		type: ContractRateType;
	};
	balance: number;
	transactions: {
		initial: OutputTransaction;
		others: OutputTransaction[];
	};
};

type Output = {
	id: string;
	contractDate: string;
	clientId: string;
	balance: number;
	initialVersion: OutputVersion;
	additives: OutputVersion[];
	lastVersion: OutputVersion;
};

export class GetContracts {
	private readonly contractRepository: ContractRepository;
	private readonly accountRepository: AccountRepository;

	constructor(repositoryFactory: RepositoryFactory) {
		this.accountRepository = repositoryFactory.accountRepository;
		this.contractRepository = repositoryFactory.contractRepository;
	}

	async execute(input: Input): Promise<Output[]> {
		const account = await this.accountRepository.getBySessionToken(input.sessionToken);

		if (!account) {
			throw new AuthError('ACCOUNT_NOT_FOUND');
		}

		const contracts = await this.contractRepository.getClientContracts(account.getId());
		return contracts.map<Output>(contract => this.toOutput(contract));
	}

	private toOutput(contract: Contract): Output {
		const versions = contract.getVersions();
		const lastVersion = contract.getLastVersion();
		return ({
			id: contract.getId(),
			contractDate: contract.getDate().toISOString(),
			clientId: contract.getClientId(),
			balance: contract.getBalance(),
			lastVersion: this.toOutputVersion(lastVersion),
			initialVersion: this.toOutputVersion(versions.initial),
			additives: versions.additives.map(version => this.toOutputVersion(version)),
		});
	}

	private toOutputVersion(version: ContractVersion): OutputVersion {
		const outputTransactions = this.toOutputTransactions(version.getTransactions());
		return {
			balance: version.getBalance(),
			startDate: version.getStartDate().toISOString(),
			dueDate: version.getDueDate().toISOString(),
			type: version.getType(),
			rate: {
				type: version.getRate().type,
				value: version.getRate().value,
			},
			transactions: outputTransactions,
		};
	}

	private toOutputTransactions(transactions: ContractVersionTransactions): {
		initial: OutputTransaction;
		others: OutputTransaction[];
	} {
		const initialTransaction = {
			id: transactions.initial.getId(),
			date: transactions.initial.getDate().toISOString(),
			value: transactions.initial.getValue(),
		};
		const otherTransactions = transactions.others.map(transaction => ({
			id: transaction.getId(),
			date: transaction.getDate().toISOString(),
			value: transaction.getValue(),
		}));
		return {
			initial: initialTransaction,
			others: otherTransactions,
		};
	}
}

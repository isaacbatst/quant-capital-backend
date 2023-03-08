import {type Contract} from '../../domain/entities/Contract/Contract';
import {type ContractRateType} from '../../domain/entities/Contract/ContractRate';
import {type ContractTransactionType} from '../../domain/entities/Contract/ContractTransaction';
import {type ContractVersion, type ContractVersionTransactions, type ContractVersionType} from '../../domain/entities/Contract/ContractVersion';
import {NotFoundError} from '../../domain/errors/NotFoundError';
import {type AccountRepository} from '../../infra/persistance/repositories/AccountRepository';
import {type ContractRepository} from '../../infra/persistance/repositories/ContractRepository';
import {type RepositoryFactory} from '../../infra/persistance/repositories/RepositoryFactory';
import {type AuthService} from './AuthService';

type Input = {
	sessionToken: string;
	contractId: string;
};

type OutputTransaction = {
	id: string;
	date: string;
	value: number;
	type: ContractTransactionType;
};

type OutputVersion = {
	id: string;
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

export class GetContract {
	private readonly contractRepository: ContractRepository;
	private readonly accountRepository: AccountRepository;

	constructor(
		repositoryFactory: RepositoryFactory,
		private readonly authService: AuthService,
	) {
		this.accountRepository = repositoryFactory.accountRepository;
		this.contractRepository = repositoryFactory.contractRepository;
	}

	async execute(input: Input): Promise<Output> {
		const account = await this.authService.getAccountBySessionToken(input.sessionToken);
		const contract = await this.contractRepository.getById(input.contractId, account.getId());

		if (!contract) {
			throw new NotFoundError('CONTRACT_NOT_FOUND');
		}

		return this.toOutput(contract);
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
			id: version.getId(),
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
			type: transactions.initial.getType(),
		};
		const otherTransactions = transactions.others.map(transaction => ({
			id: transaction.getId(),
			date: transaction.getDate().toISOString(),
			value: transaction.getValue(),
			type: transaction.getType(),
		}));
		return {
			initial: initialTransaction,
			others: otherTransactions,
		};
	}
}

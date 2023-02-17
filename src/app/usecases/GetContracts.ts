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

type Output = {
	id: string;
	date: string;
	balance: number;
	clientId: string;
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

		const contracts = await this.contractRepository.getClientContractBriefs(account.getId());
		return contracts.map<Output>(contract => ({
			id: contract.getId(),
			date: contract.getDate().toISOString(),
			balance: contract.getBalance(),
			clientId: contract.getClientId(),
		}));
	}
}

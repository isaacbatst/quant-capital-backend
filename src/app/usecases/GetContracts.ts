import {type AccountRepository} from '../../infra/persistance/repositories/AccountRepository';
import {type ContractRepository} from '../../infra/persistance/repositories/ContractRepository';
import {type RepositoryFactory} from '../../infra/persistance/repositories/RepositoryFactory';
import {type AuthService} from './AuthService';

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

	constructor(
		repositoryFactory: RepositoryFactory,
		private readonly authService: AuthService,
	) {
		this.contractRepository = repositoryFactory.contractRepository;
	}

	async execute(input: Input): Promise<Output[]> {
		const account = await this.authService.getAccountBySessionToken(input.sessionToken);
		const contracts = await this.contractRepository.getContractBriefsByClientId(account.getId());
		return contracts.map<Output>(contract => ({
			id: contract.getId(),
			date: contract.getDate().toISOString(),
			balance: contract.getBalance(),
			clientId: contract.getClientId(),
		}));
	}
}

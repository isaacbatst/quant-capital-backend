import {AccountBalanceCalculator} from '../../domain/entities/Account/AccountBalanceCalculator';
import {type ContractRepository} from '../../infra/persistance/repositories/ContractRepository/ContractRepository';
import {type RepositoryFactory} from '../../infra/persistance/repositories/RepositoryFactory/RepositoryFactory';
import {type AuthService} from './AuthService';

type Input = {
	sessionToken: string;
};

type Output = {
	id: string;
	name: string;
	email: string;
	balance: number;
};

export class GetUser {
	private readonly contractRepository: ContractRepository;

	constructor(
		repositoryFactory: RepositoryFactory,
		private readonly authService: AuthService,
	) {
		this.contractRepository = repositoryFactory.contractRepository;
	}

	async execute(input: Input): Promise<Output> {
		const account = await this.authService.getAccountBySessionToken(input.sessionToken);
		const contracts = await this.contractRepository.getContractBriefsByClientId(account.getId());

		return {
			id: account.getId(),
			name: account.getName(),
			email: account.getEmail().value,
			balance: AccountBalanceCalculator.calculate(contracts),
		};
	}
}

import {AccountBalanceCalculator} from '../../domain/entities/Account/AccountBalanceCalculator';
import {AuthError} from '../../domain/errors/AuthError';
import {type AccountRepository} from '../../infra/persistance/repositories/AccountRepository';
import {type ContractRepository} from '../../infra/persistance/repositories/ContractRepository';
import {type RepositoryFactory} from '../../infra/persistance/repositories/RepositoryFactory';
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
	private readonly accountRepository: AccountRepository;
	private readonly contractRepository: ContractRepository;

	constructor(
		repositoryFactory: RepositoryFactory,
		private readonly authService: AuthService,
	) {
		this.accountRepository = repositoryFactory.accountRepository;
		this.contractRepository = repositoryFactory.contractRepository;
	}

	async execute(input: Input): Promise<Output> {
		const account = await this.authService.getAccountBySessionToken(input.sessionToken);
		const contracts = await this.contractRepository.getClientContractBriefs(account.getId());

		return {
			id: account.getId(),
			name: account.getName(),
			email: account.getEmail().value,
			balance: AccountBalanceCalculator.calculate(contracts),
		};
	}
}

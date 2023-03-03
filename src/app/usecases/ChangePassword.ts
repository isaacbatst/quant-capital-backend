import {ConflictError} from '../../domain/errors/ConflictError';
import {type AccountRepository} from '../../infra/persistance/repositories/AccountRepository';
import {type RepositoryFactory} from '../../infra/persistance/repositories/RepositoryFactory';
import {type Encrypter} from '../../infra/util/Encrypter/Encrypter';
import {type AuthService} from './AuthService';

type Input = {
	password: string;
	sessionToken: string;
};

export class ChangePassword {
	private readonly accountRepository: AccountRepository;

	constructor(
		repositoryFactory: RepositoryFactory,
		private readonly encrypter: Encrypter,
		private readonly authService: AuthService,
	) {
		this.accountRepository = repositoryFactory.accountRepository;
	}

	async execute(input: Input) {
		const account = await this.authService.getAccountBySessionToken(input.sessionToken);

		const isTheSame = await this.encrypter.compare(input.password, account.getPasswordHash());

		if (isTheSame) {
			throw new ConflictError('EQUAL_PASSWORD');
		}

		const hash = await this.encrypter.encrypt(input.password);
		account.changePassword(input.password, hash);
		await this.accountRepository.update(account);
	}
}

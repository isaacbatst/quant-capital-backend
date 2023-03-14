import {AuthError} from '../../domain/errors/AuthError';
import {ConflictError} from '../../domain/errors/ConflictError';
import {ValidationError} from '../../domain/errors/ValidationError';
import {type AccountRepository} from '../../infra/persistance/repositories/AccountRepository/AccountRepository';
import {type RepositoryFactory} from '../../infra/persistance/repositories/RepositoryFactory';
import {type Encrypter} from '../../infra/util/Encrypter/Encrypter';
import {type AuthService} from './AuthService';

type Input = {
	currentPassword: string;
	password: string;
	passwordConfirmation: string;
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
		if (input.password !== input.passwordConfirmation) {
			throw new ValidationError('INVALID_PASSWORD_CONFIRMATION');
		}

		const account = await this.authService.getAccountBySessionToken(input.sessionToken);

		const isCurrentPasswordCorrect = await this.encrypter.compare(input.currentPassword, account.getPasswordHash());

		if (!isCurrentPasswordCorrect) {
			throw new AuthError('INVALID_CURRENT_PASSWORD');
		}

		const isNewPasswordEqual = await this.encrypter.compare(input.password, account.getPasswordHash());

		if (isNewPasswordEqual) {
			throw new ConflictError('EQUAL_PASSWORD');
		}

		const hash = await this.encrypter.encrypt(input.password);
		account.changePassword(input.password, hash);
		await this.accountRepository.update(account);
	}
}

import {AuthError} from '../../domain/errors/AuthError';
import {NotFoundError} from '../../domain/errors/NotFoundError';
import {type AccountRepository} from '../../infra/persistance/repositories/AccountRepository/AccountRepository';
import {type PasswordResetRequestRepository} from '../../infra/persistance/repositories/PasswordResetRequestRepository/PasswordResetRequestRepository';
import {type RepositoryFactory} from '../../infra/persistance/repositories/RepositoryFactory/RepositoryFactory';
import {type Encrypter} from '../../infra/util/Encrypter/Encrypter';
import {type AuthService} from './AuthService';

type Input = {
	token: string;
	password: string;
};

export class ResetPassword {
	readonly accountRepository: AccountRepository;
	readonly passwordResetRequestRepository: PasswordResetRequestRepository;
	constructor(
		repositoryFactory: RepositoryFactory,
		private readonly encrypter: Encrypter,
		private readonly authService: AuthService,
	) {
		this.accountRepository = repositoryFactory.accountRepository;
		this.passwordResetRequestRepository = repositoryFactory.passwordResetRequestRepository;
	}

	async execute(input: Input): Promise<void> {
		const passwordResetRequest = await this.passwordResetRequestRepository.getByToken(input.token);
		if (!passwordResetRequest) {
			throw new NotFoundError('PASSWORD_RESET_REQUEST_NOT_FOUND');
		}

		passwordResetRequest.use();
		const account = await this.authService.getAccountByEmail(passwordResetRequest.emailAddress);
		const hash = await this.encrypter.encrypt(input.password);
		account.changePassword(input.password, hash);
		await Promise.all([
			this.passwordResetRequestRepository.update(passwordResetRequest),
			this.accountRepository.update(account),
		]);
	}
}

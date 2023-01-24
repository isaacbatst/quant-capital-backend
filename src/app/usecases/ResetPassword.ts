import {type AccountRepository} from '../../infra/persistance/repositories/AccountRepository';
import {type PasswordResetRequestRepository} from '../../infra/persistance/repositories/PasswordResetRequestRepository';
import {type RepositoryFactory} from '../../infra/persistance/repositories/RepositoryFactory';
import {type Encrypter} from '../../infra/util/Encrypter/Encrypter';

type Input = {
	token: string;
	password: string;
};

export class ResetPassword {
	readonly accountRepository: AccountRepository;
	readonly passwordResetRequestRepository: PasswordResetRequestRepository;
	constructor(
		repositoryFactory: RepositoryFactory,
		readonly encrypter: Encrypter,
	) {
		this.accountRepository = repositoryFactory.accountRepository;
		this.passwordResetRequestRepository = repositoryFactory.passwordResetRequestRepository;
	}

	async execute(input: Input): Promise<void> {
		const passwordResetRequest = await this.passwordResetRequestRepository.getByToken(input.token);
		if (!passwordResetRequest) {
			throw new Error('PASSWORD_RESET_REQUEST_NOT_FOUND');
		}

		const account = await this.accountRepository.getByEmail(passwordResetRequest.emailAddress.value);
		if (!account) {
			throw new Error('ACCOUNT_NOT_FOUND');
		}

		const hash = await this.encrypter.encrypt(input.password);
		account.changePassword(input.password, hash);
		passwordResetRequest.use();
		await this.passwordResetRequestRepository.update(passwordResetRequest);
		await this.accountRepository.update(account);
	}
}
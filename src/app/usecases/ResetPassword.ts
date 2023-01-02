import {type PasswordResetRequestRepository} from '../../infra/persistance/repositories/PasswordResetRequestRepository';
import {type RepositoryFactory} from '../../infra/persistance/repositories/RepositoryFactory';
import {type UserRepository} from '../../infra/persistance/repositories/UserRepository';
import {type Encrypter} from '../../infra/util/Encrypter/Encrypter';

type Input = {
	token: string;
	password: string;
};

export class ResetPassword {
	readonly userRepository: UserRepository;
	readonly passwordResetRequestRepository: PasswordResetRequestRepository;
	constructor(
		repositoryFactory: RepositoryFactory,
		readonly encrypter: Encrypter,
	) {
		this.userRepository = repositoryFactory.userRepository;
		this.passwordResetRequestRepository = repositoryFactory.passwordResetRequestRepository;
	}

	async execute(input: Input): Promise<void> {
		const passwordResetRequest = await this.passwordResetRequestRepository.getByToken(input.token);

		if (!passwordResetRequest) {
			throw new Error('PASSWORD_RESET_REQUEST_NOT_FOUND');
		}

		const user = await this.userRepository.getByEmail(passwordResetRequest.emailAddress.value);

		if (!user) {
			throw new Error('USER_NOT_FOUND');
		}

		const hash = await this.encrypter.encrypt(input.password);
		user.resetPassword(hash);
		passwordResetRequest.use();
		await this.passwordResetRequestRepository.update(passwordResetRequest);
		await this.userRepository.update(user);
	}
}

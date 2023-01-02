import {EmailAddress} from '../../domain/entities/EmailAddress';
import {PasswordResetRequest} from '../../domain/entities/PasswordResetRequest';
import {PasswordResetRequestEmailGenerator} from '../../domain/entities/PasswordResetRequestEmailGenerator';
import {type EmailGateway} from '../../infra/gateways/EmailGateway/EmailGateway';
import {type PasswordResetRequestRepository} from '../../infra/persistance/repositories/PasswordResetRequestRepository';
import {type RepositoryFactory} from '../../infra/persistance/repositories/RepositoryFactory';
import {type UserRepository} from '../../infra/persistance/repositories/UserRepository';
import {type TokenGenerator} from '../../infra/util/TokenGenerator/TokenGenerator';

type Input = {
	email: string;
};

export class ForgotMyPassword {
	private readonly passwordResetRequestRepository: PasswordResetRequestRepository;
	private readonly userRepository: UserRepository;
	constructor(
		repositoryFactory: RepositoryFactory,
		private readonly tokenGenerator: TokenGenerator,
		private readonly emailGateway: EmailGateway,
		private readonly appUrl: string,
	) {
		this.passwordResetRequestRepository = repositoryFactory.passwordResetRequestRepository;
		this.userRepository = repositoryFactory.userRepository;
	}

	async execute(input: Input) {
		const user = await this.userRepository.getByEmail(input.email);

		if (!user) {
			throw new Error('USER_NOT_FOUND');
		}

		const token = await this.tokenGenerator.generate();
		const request = new PasswordResetRequest(token, new Date(), new EmailAddress(input.email));
		const email = PasswordResetRequestEmailGenerator.generate(request.emailAddress, request.token, this.appUrl);
		await this.emailGateway.send(email);
		await this.passwordResetRequestRepository.save(request);
	}
}

import {EmailAddress} from '../../domain/entities/Account/EmailAddress';
import {PasswordResetRequest} from '../../domain/entities/Account/PasswordResetRequest';
import {PasswordResetRequestEmailGenerator} from '../../domain/entities/Account/PasswordResetRequestEmailGenerator';
import {type EmailGateway} from '../../infra/gateways/EmailGateway/EmailGateway';
import {type PasswordResetRequestRepository} from '../../infra/persistance/repositories/PasswordResetRequestRepository/PasswordResetRequestRepository';
import {type RepositoryFactory} from '../../infra/persistance/repositories/RepositoryFactory';
import {type TokenGenerator} from '../../infra/util/TokenGenerator/TokenGenerator';
import {type AuthService} from './AuthService';

type Input = {
	email: string;
};

type Params = {
	repositoryFactory: RepositoryFactory;
	tokenGenerator: TokenGenerator;
	emailGateway: EmailGateway;
	appUrl: string;
	authService: AuthService;
};

export class ForgotMyPassword {
	private readonly passwordResetRequestRepository: PasswordResetRequestRepository;
	private readonly tokenGenerator: TokenGenerator;
	private readonly emailGateway: EmailGateway;
	private readonly appUrl: string;
	private readonly authService: AuthService;
	constructor(
		{appUrl, authService, emailGateway, repositoryFactory, tokenGenerator}: Params,
	) {
		this.passwordResetRequestRepository = repositoryFactory.passwordResetRequestRepository;
		this.tokenGenerator = tokenGenerator;
		this.emailGateway = emailGateway;
		this.appUrl = appUrl;
		this.authService = authService;
	}

	async execute(input: Input) {
		const account = await this.authService.getAccountByEmail(new EmailAddress(input.email));

		const token = await this.tokenGenerator.generate();
		const request = new PasswordResetRequest({
			createdAt: new Date(),
			emailAddress: new EmailAddress(account.getEmail().value),
			token,
		});
		const email = PasswordResetRequestEmailGenerator.generate(request.emailAddress, request.token, this.appUrl);
		await this.passwordResetRequestRepository.save(request);
		await this.emailGateway.send(email);
	}
}

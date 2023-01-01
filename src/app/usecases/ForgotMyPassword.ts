import {PasswordReset} from '../../domain/entities/PasswordReset';
import {type EmailGateway} from '../../infra/gateways/EmailGateway/EmailGateway';
import {type PasswordResetRepository} from '../../infra/persistance/repositories/PasswordResetRepository';
import {type TokenGenerator} from '../../infra/TokenGenerator/TokenGenerator';

type Input = {
	email: string;
};

export class ForgotMyPassword {
	constructor(
		private readonly tokenGenerator: TokenGenerator,
		private readonly passwordResetRepository: PasswordResetRepository,
		private readonly emailGateway: EmailGateway,
		private readonly appUrl: string,
	) {}

	async execute(input: Input) {
		const token = this.tokenGenerator.generate();
		const passwordReset = new PasswordReset(token, new Date(), input.email, this.appUrl);
		await this.emailGateway.send(passwordReset.email);
		await this.passwordResetRepository.save(passwordReset);
	}
}

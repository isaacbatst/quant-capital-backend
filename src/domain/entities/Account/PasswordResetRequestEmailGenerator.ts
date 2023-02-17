import {Email} from '../Email';
import {type EmailAddress} from './EmailAddress';

export class PasswordResetRequestEmailGenerator {
	static get emailSubject() {
		return 'QuantCapital - Redefinição de Senha';
	}

	static generate(to: EmailAddress, token: string, appUrl: string): Email {
		const emailMessage = `Botão com link ${appUrl}/forgot-password?token=${token}`;
		return new Email(
			to,
			PasswordResetRequestEmailGenerator.emailSubject,
			emailMessage,
		);
	}
}

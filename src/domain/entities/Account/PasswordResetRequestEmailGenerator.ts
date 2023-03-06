import {Email} from '../Email';
import {type EmailAddress} from './EmailAddress';

export class PasswordResetRequestEmailGenerator {
	static get emailSubject() {
		return 'QuantCapital - Redefinição de Senha';
	}

	static generate(to: EmailAddress, token: string, appUrl: string): Email {
		const link = `${appUrl}/reset-password?token=${token}`;
		const emailMessage = `<a href="${link}">Clique aqui para redefinir sua senha</a>`;
		return new Email(
			to,
			PasswordResetRequestEmailGenerator.emailSubject,
			emailMessage,
		);
	}
}

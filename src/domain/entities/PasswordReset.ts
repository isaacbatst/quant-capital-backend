import {Email} from './Email';
import {EmailAddress} from './EmailAddress';

export class PasswordReset {
	static get emailSubject() {
		return 'QuantCapital - Redefinição de Senha';
	}

	readonly email: Email;

	constructor(
		readonly token: string,
		readonly createdAt: Date,
		emailAddress: string,
		appUrl: string,
	) {
		const emailMessage = `Botão com link ${appUrl}/forgot-password?token=${token}`;
		this.email = new Email(new EmailAddress(emailAddress), PasswordReset.emailSubject, emailMessage);
	}
}

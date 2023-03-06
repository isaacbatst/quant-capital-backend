import {type Email} from '../../../domain/entities/Email';
import {type EmailGateway} from './EmailGateway';
import {createTransport, type Transporter} from 'nodemailer';

export class EmailGatewayNodemailer implements EmailGateway {
	private readonly transporter: Transporter;

	constructor() {
		this.transporter = createTransport({
			host: 'smtp.gmail.com',
			port: 465,
			secure: true,
			auth: {
				user: 'isaacbatst@gmail.com',
				pass: 'xjqedkykncddihme',
			},
		});
	}

	async send(email: Email): Promise<void> {
		await this.transporter.sendMail({
			from: '"Isaac Batista" <isaacbatst@gmail.com>',
			to: 'isaacbatst@gmail.com',
			subject: email.subject,
			html: email.message,
		});
	}
}

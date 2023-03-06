import {type Email} from '../../../domain/entities/Email';
import {type EmailGateway} from './EmailGateway';
import {createTransport, type Transporter} from 'nodemailer';

type Params = {
	host: string;
	port: number;
	secure: boolean;
	from: string;
	auth: {
		user: string;
		pass: string;
	};
};
export class EmailGatewayNodemailer implements EmailGateway {
	private readonly transporter: Transporter;
	private readonly from: string;

	constructor(params: Params) {
		this.transporter = createTransport(params);
		this.from = params.from;
	}

	async send(email: Email): Promise<void> {
		await this.transporter.sendMail({
			from: this.from,
			to: 'isaacbatst@gmail.com',
			subject: email.subject,
			html: email.message,
		});
	}
}

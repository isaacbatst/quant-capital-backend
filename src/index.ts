import {App} from './app';
import {EmailGatewayNodemailer} from './infra/gateways/EmailGateway/EmailGatewayNodemailer';

if (!process.env.APP_URL) {
	throw new Error('APP_URL is not defined');
}

if (!process.env.EMAIL_HOST) {
	throw new Error('EMAIL_HOST is not defined');
}

if (!process.env.EMAIL_PORT) {
	throw new Error('EMAIL_PORT is not defined');
}

if (!process.env.EMAIL_USER) {
	throw new Error('EMAIL_USER is not defined');
}

if (!process.env.EMAIL_PASSWORD) {
	throw new Error('EMAIL_PASSWORD is not defined');
}

if (!process.env.EMAIL_SECURE) {
	throw new Error('EMAIL_SECURE is not defined');
}

if (!process.env.EMAIL_FROM) {
	throw new Error('EMAIL_FROM is not defined');
}

const emailGateway = new EmailGatewayNodemailer({
	host: process.env.EMAIL_HOST,
	port: Number(process.env.EMAIL_PORT),
	secure: process.env.EMAIL_SECURE === 'true',
	from: process.env.EMAIL_FROM,
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASSWORD,
	},
});

const app = new App(process.env.APP_URL, emailGateway);

app.listen(Number(process.env.PORT));

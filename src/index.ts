import {App} from './app';

if (!process.env.APP_URL) {
	throw new Error('APP_URL is not defined');
}

const app = new App(process.env.APP_URL);

app.listen(Number(process.env.PORT));

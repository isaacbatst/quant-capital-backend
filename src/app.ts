import express from 'express';
import 'express-async-errors';
import {AuthService} from './app/usecases/AuthService';
import {Login} from './app/usecases/Login';
import {LoginController} from './infra/controllers/LoginController';
import {ErrorMiddleware} from './infra/middlewares/ErrorMiddleware';
import {AccountRepositoryFake} from './infra/persistance/repositories/AccountRepositoryFake';
import {EncrypterBcrypt} from './infra/util/Encrypter/EncrypterBcrypt';
import {IdGeneratorCrypto} from './infra/util/IdGenerator/IdGeneratorCrypto';
import {TokenGeneratorCrypto} from './infra/util/TokenGenerator/TokenGeneratorCrypto';

export class App {
	private readonly app: express.Application;

	constructor() {
		this.app = express();
		this.app.use(express.json());

		const accountRepository = new AccountRepositoryFake();

		const encrypter = new EncrypterBcrypt();
		const tokenGenerator = new TokenGeneratorCrypto();
		const idGenerator = new IdGeneratorCrypto();
		const authService = new AuthService(accountRepository);

		const login = new Login(accountRepository, encrypter, tokenGenerator);
		const loginController = new LoginController(login);

		this.app.post('/login', async (req, res) => loginController.handle(req, res));
		this.app.use(ErrorMiddleware.handle);
	}

	public listen() {
		this.app.listen(3000, () => {
			console.log('Server started on port 3000');
		});
	}
}

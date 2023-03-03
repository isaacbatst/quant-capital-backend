import express from 'express';
import 'express-async-errors';
import {AuthService} from './app/usecases/AuthService';
import {GetUser} from './app/usecases/GetUser';
import {Login} from './app/usecases/Login';
import {GetUserController} from './infra/controllers/GetUserController';
import {LoginController} from './infra/controllers/LoginController';
import {ErrorMiddleware} from './infra/middlewares/ErrorMiddleware';
import {RepositoryFactoryFake} from './infra/persistance/repositories/RepositoryFactoryFake';
import {EncrypterBcrypt} from './infra/util/Encrypter/EncrypterBcrypt';
import {IdGeneratorCrypto} from './infra/util/IdGenerator/IdGeneratorCrypto';
import {TokenGeneratorCrypto} from './infra/util/TokenGenerator/TokenGeneratorCrypto';

export class App {
	private readonly app: express.Application;

	constructor() {
		this.app = express();
		this.app.use(express.json());

		const repositoryFactory = new RepositoryFactoryFake();

		const encrypter = new EncrypterBcrypt();
		const tokenGenerator = new TokenGeneratorCrypto();
		const idGenerator = new IdGeneratorCrypto();
		const authService = new AuthService(repositoryFactory.accountRepository);

		const login = new Login(repositoryFactory.accountRepository, encrypter, tokenGenerator);
		const getUser = new GetUser(repositoryFactory, authService);

		const loginController = new LoginController(login);
		const getUserController = new GetUserController(getUser);

		this.app.post('/login', async (req, res) => loginController.handle(req, res));
		this.app.get('/user', async (req, res) => getUserController.handle(req, res));

		this.app.use(ErrorMiddleware.handle);
	}

	public listen() {
		this.app.listen(3000, () => {
			console.log('Server started on port 3000');
		});
	}
}

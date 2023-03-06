import express from 'express';
import 'express-async-errors';
import {AuthService} from './app/usecases/AuthService';
import {ChangePassword} from './app/usecases/ChangePassword';
import {GetContract} from './app/usecases/GetContract';
import {GetContracts} from './app/usecases/GetContracts';
import {GetLastTransactions} from './app/usecases/GetLastTransactions';
import {GetNotifications} from './app/usecases/GetNotifications';
import {GetProduct} from './app/usecases/GetProduct';
import {GetProducts} from './app/usecases/GetProducts';
import {GetTransactions} from './app/usecases/GetTransactions';
import {GetUser} from './app/usecases/GetUser';
import {Login} from './app/usecases/Login';
import {ChangePasswordController} from './infra/controllers/ChangePasswordController';
import {GetContractController} from './infra/controllers/GetContractController';
import {GetContractsController} from './infra/controllers/GetContractsController';
import {GetLastTransactionsController} from './infra/controllers/GetLastTransactionsController';
import {GetNotificationsController} from './infra/controllers/GetNotifications';
import {GetProductController} from './infra/controllers/GetProductController';
import {GetProductsController} from './infra/controllers/GetProductsController';
import {GetTransactionsController} from './infra/controllers/GetTransactionsController';
import {GetUserController} from './infra/controllers/GetUserController';
import {LoginController} from './infra/controllers/LoginController';
import {AuthMiddleware} from './infra/middlewares/AuthMiddleware';
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
		const changePassword = new ChangePassword(repositoryFactory, encrypter, authService);
		const getContracts = new GetContracts(repositoryFactory, authService);
		const getContract = new GetContract(repositoryFactory, authService);
		const getTransactions = new GetTransactions(repositoryFactory, authService);
		const getLastTransactions = new GetLastTransactions(repositoryFactory, authService);
		const getProduct = new GetProduct(repositoryFactory.productRepository, authService);
		const getProducts = new GetProducts(repositoryFactory, authService);
		const getNotifications = new GetNotifications(repositoryFactory.notificationRepository, authService);

		const loginController = new LoginController(login);
		const getUserController = new GetUserController(getUser);
		const getContractsController = new GetContractsController(getContracts);
		const changePasswordController = new ChangePasswordController(changePassword);
		const getContractController = new GetContractController(getContract);
		const getTransactionsController = new GetTransactionsController(getTransactions);
		const getLastTransactionsController = new GetLastTransactionsController(getLastTransactions);
		const getProductController = new GetProductController(getProduct);
		const getProductsController = new GetProductsController(getProducts);
		const getNotificationsController = new GetNotificationsController(getNotifications);

		this.app.post('/login', async (req, res) => loginController.handle(req, res));

		this.app.use(AuthMiddleware.handle);
		this.app.get('/user', async (req, res) => getUserController.handle(req, res));
		this.app.patch('/user/change-password', async (req, res) => changePasswordController.handle(req, res));
		this.app.get('/contracts', async (req, res) => getContractsController.handle(req, res));
		this.app.get('/contract/:id', async (req, res) => getContractController.handle(req, res));
		this.app.get('/transactions', async (req, res) => getTransactionsController.handle(req, res));
		this.app.get('/last-transactions', async (req, res) => getLastTransactionsController.handle(req, res));
		this.app.get('/product/:id', async (req, res) => getProductController.handle(req, res));
		this.app.get('/products', async (req, res) => getProductsController.handle(req, res));
		this.app.get('/notifications', async (req, res) => getNotificationsController.handle(req, res));

		this.app.use(ErrorMiddleware.handle);
	}

	public listen(port = 3000): void {
		this.app.listen(port, () => {
			console.log('Server started on port', port);
		});
	}
}

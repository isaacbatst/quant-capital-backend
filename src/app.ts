import express from 'express';
import 'express-async-errors';
import morgan from 'morgan';
import path from 'path';
import {PrismaClient as PrismaAppClient} from '../prisma/generated/appClient';
import {PrismaClient as PrismaRpClient} from '../prisma/generated/rpClient';
import {AuthService} from './app/usecases/AuthService';
import {ChangePassword} from './app/usecases/ChangePassword';
import {ForgotMyPassword} from './app/usecases/ForgotMyPassword';
import {GetCarouselBanners} from './app/usecases/GetCarouselBanners';
import {GetContract} from './app/usecases/GetContract';
import {GetContracts} from './app/usecases/GetContracts';
import {GetContributionsWhatsapp} from './app/usecases/GetContributionsWhatsapp';
import {GetCustomerService} from './app/usecases/GetCustomerService';
import {GetLastTransactions} from './app/usecases/GetLastTransactions';
import {GetNotifications} from './app/usecases/GetNotifications';
import {GetNotificationsSettings} from './app/usecases/GetNotificationsSettings';
import {GetProduct} from './app/usecases/GetProduct';
import {GetProducts} from './app/usecases/GetProducts';
import {GetRegistrationData} from './app/usecases/GetRegistrationData';
import {GetTransactions} from './app/usecases/GetTransactions';
import {GetUnreadNotificationsCount} from './app/usecases/GetUnreadNotificationsCount';
import {GetUser} from './app/usecases/GetUser';
import {Login} from './app/usecases/Login';
import {Logout} from './app/usecases/Logout';
import {RequestContractWithdraw} from './app/usecases/RequestContractWithdraw';
import {RequestEmailChange} from './app/usecases/RequestEmailChange';
import {ResetPassword} from './app/usecases/ResetPassword';
import {SavePushToken} from './app/usecases/SavePushToken';
import {UpdateNotificationSettings} from './app/usecases/UpdateNotificationSettings';
import {ViewNotification} from './app/usecases/ViewNotification';
import {ChangePasswordController} from './infra/controllers/ChangePasswordController';
import {ForgotMyPasswordController} from './infra/controllers/ForgotMyPasswordController';
import {GetCarouselBannersController} from './infra/controllers/GetCarouselBannersController';
import {GetContractController} from './infra/controllers/GetContractController';
import {GetContractsController} from './infra/controllers/GetContractsController';
import {GetContributionsWhatsappController} from './infra/controllers/GetContributionsWhatsappController';
import {GetCustomerServiceController} from './infra/controllers/GetCustomerServiceController';
import {GetLastTransactionsController} from './infra/controllers/GetLastTransactionsController';
import {GetNotificationsController} from './infra/controllers/GetNotifications';
import {GetNotificationSettingsController} from './infra/controllers/GetNotificationSettingsController';
import {GetProductController} from './infra/controllers/GetProductController';
import {GetProductsController} from './infra/controllers/GetProductsController';
import {GetRegistrationDataController} from './infra/controllers/GetRegistrationDataController';
import {GetTransactionsController} from './infra/controllers/GetTransactionsController';
import {GetUnreadNotificationsCountController} from './infra/controllers/GetUnreadNotificationsCountController';
import {GetUserController} from './infra/controllers/GetUserController';
import {LoginController} from './infra/controllers/LoginController';
import {LogoutController} from './infra/controllers/LogoutController';
import {RequestContractWithdrawController} from './infra/controllers/RequestContractWithdrawController';
import {RequestEmailChangeController} from './infra/controllers/RequestEmailChangeController';
import {ResetPasswordController} from './infra/controllers/ResetPasswordController';
import {SavePushTokenController} from './infra/controllers/SavePushTokenController';
import {UpdateNotificationSettingsController} from './infra/controllers/UpdateNotificationSettingsController';
import {ViewNotificationController} from './infra/controllers/ViewNotification';
import {type EmailGateway} from './infra/gateways/EmailGateway/EmailGateway';
import {AuthMiddleware} from './infra/middlewares/AuthMiddleware';
import {ErrorMiddleware} from './infra/middlewares/ErrorMiddleware';
import {RepositoryFactoryPrisma} from './infra/persistance/repositories/RepositoryFactory/RepositoryFactoryPrisma';
import {EncrypterBcrypt} from './infra/util/Encrypter/EncrypterBcrypt';
import {IdGeneratorCrypto} from './infra/util/IdGenerator/IdGeneratorCrypto';
import {TokenGeneratorCrypto} from './infra/util/TokenGenerator/TokenGeneratorCrypto';

export class App {
	private readonly app: express.Application;

	constructor(appUrl: string, emailGateway: EmailGateway) {
		this.app = express();
		this.app.use(morgan('combined'));
		this.app.use(express.json());
		this.app.use('/', express.static(path.join(__dirname, 'static', 'images')));

		// Const repositoryFactory = new RepositoryFactoryFake(appUrl);
		const repositoryFactory = new RepositoryFactoryPrisma(new PrismaAppClient(), new PrismaRpClient());

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
		const getUnreadNotificationsCount = new GetUnreadNotificationsCount(repositoryFactory.notificationRepository, authService);
		const viewNotification = new ViewNotification(repositoryFactory.notificationRepository, authService);
		const forgotMyPassword = new ForgotMyPassword({appUrl, authService, repositoryFactory, tokenGenerator, emailGateway});
		const resetPassword = new ResetPassword(repositoryFactory, encrypter, authService);
		const getRegistrationData = new GetRegistrationData(repositoryFactory.accountRepository, authService);
		const requestEmailChange = new RequestEmailChange(repositoryFactory, idGenerator, authService);
		const requestContractWithdraw = new RequestContractWithdraw(repositoryFactory, idGenerator, authService, encrypter);
		const getNotificationSettings = new GetNotificationsSettings(authService);
		const updateNotificationSettings = new UpdateNotificationSettings(authService);
		const getContributionsWhatsapp = new GetContributionsWhatsapp(authService);
		const getCustomerService = new GetCustomerService(authService);
		const getCarouselBanners = new GetCarouselBanners(authService, appUrl);
		const logout = new Logout(authService);
		const savePushToken = new SavePushToken(authService);

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
		const getUnreadNotificationsCountController = new GetUnreadNotificationsCountController(getUnreadNotificationsCount);
		const viewNotificationController = new ViewNotificationController(viewNotification);
		const forgotMyPasswordController = new ForgotMyPasswordController(forgotMyPassword);
		const resetPasswordController = new ResetPasswordController(resetPassword);
		const getRegistrationDataController = new GetRegistrationDataController(getRegistrationData);
		const requestEmailChangeController = new RequestEmailChangeController(requestEmailChange);
		const requestContractWithdrawController = new RequestContractWithdrawController(requestContractWithdraw);
		const getNotificationSettingsController = new GetNotificationSettingsController(getNotificationSettings);
		const updateNotificationSettingsController = new UpdateNotificationSettingsController(updateNotificationSettings);
		const getContributionsWhatsappController = new GetContributionsWhatsappController(getContributionsWhatsapp);
		const getCustomerServiceController = new GetCustomerServiceController(getCustomerService);
		const getCarouselBannersController = new GetCarouselBannersController(getCarouselBanners);
		const logoutController = new LogoutController(logout);
		const savePushTokenController = new SavePushTokenController(savePushToken);

		this.app.post('/login', async (req, res) => loginController.handle(req, res));
		this.app.post('/forgot-password', async (req, res) => forgotMyPasswordController.handle(req, res));
		this.app.post('/reset-password', async (req, res) => resetPasswordController.handle(req, res));

		this.app.use(AuthMiddleware.handle);
		this.app.get('/user', async (req, res) => getUserController.handle(req, res));
		this.app.patch('/user/change-password', async (req, res) => changePasswordController.handle(req, res));
		this.app.get('/user/registration-data', async (req, res) => getRegistrationDataController.handle(req, res));
		this.app.get('/user/notification-settings', async (req, res) => getNotificationSettingsController.handle(req, res));
		this.app.patch('/user/notification-settings', async (req, res) => updateNotificationSettingsController.handle(req, res));
		this.app.post('/user/request-email-change', async (req, res) => requestEmailChangeController.handle(req, res));
		this.app.post('/user/push-token', async (req, res) => savePushTokenController.handle(req, res));
		this.app.get('/contracts', async (req, res) => getContractsController.handle(req, res));
		this.app.get('/contract/:id', async (req, res) => getContractController.handle(req, res));
		this.app.post('/contract/:contractId/request-withdraw', async (req, res) => requestContractWithdrawController.handle(req, res));
		this.app.get('/transactions', async (req, res) => getTransactionsController.handle(req, res));
		this.app.get('/last-transactions', async (req, res) => getLastTransactionsController.handle(req, res));
		this.app.get('/product/:id', async (req, res) => getProductController.handle(req, res));
		this.app.get('/products', async (req, res) => getProductsController.handle(req, res));
		this.app.get('/notifications', async (req, res) => getNotificationsController.handle(req, res));
		this.app.get('/notifications/unread/count', async (req, res) => getUnreadNotificationsCountController.handle(req, res));
		this.app.patch('/notifications/:id/view', async (req, res) => viewNotificationController.handle(req, res));
		this.app.get('/whatsapp/contributions', async (req, res) => getContributionsWhatsappController.handle(req, res));
		this.app.get('/customer-service', async (req, res) => getCustomerServiceController.handle(req, res));
		this.app.get('/banners-carousel', async (req, res) => getCarouselBannersController.handle(req, res));
		this.app.post('/logout', async (req, res) => logoutController.handle(req, res));

		this.app.use(ErrorMiddleware.handle);
	}

	public listen(port = 3000): void {
		this.app.listen(port, () => {
			console.log('Server started on port', port);
		});
	}
}

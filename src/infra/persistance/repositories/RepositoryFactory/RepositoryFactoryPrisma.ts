import {type PrismaClient as PrismaAppClient} from '../../../../../prisma/generated/appClient';
import {type PrismaClient as PrismaRpClient} from '../../../../../prisma/generated/rpClient';
import {type AccountRepository} from '../AccountRepository/AccountRepository';
import {AccountRepositoryPrisma} from '../AccountRepository/AccountRepositoryPrisma';
import {type ContractRepository} from '../ContractRepository/ContractRepository';
import {ContractRepositoryPrisma} from '../ContractRepository/ContractRepositoryPrisma';
import {type ContractWithdrawRequestRepository} from '../ContractWithdrawRequestRepository/ContractWithdrawRequestRepository';
import {ContractWithdrawRequestRepositoryPrisma} from '../ContractWithdrawRequestRepository/ContractWithdrawRequestRepositoryPrisma';
import {type EmailChangeRequestRepository} from '../EmailChangeRequestRepository/EmailChangeRequestRepository';
import {EmailChangeRequestRepositoryPrisma} from '../EmailChangeRequestRepository/EmailChangeRequestRepositoryPrisma';
import {type NotificationRepository} from '../NotificationRepository/NotificationRepository';
import {NotificationRepositoryPrisma} from '../NotificationRepository/NotificationRepositoryPrisma';
import {type PasswordResetRequestRepository} from '../PasswordResetRequestRepository/PasswordResetRequestRepository';
import {PasswordResetRequestRepositoryPrisma} from '../PasswordResetRequestRepository/PasswordResetRequestRepositoryPrisma';
import {type ProductRepository} from '../ProductRepository/ProductRepository';
import {ProductRepositoryPrisma} from '../ProductRepository/ProductRepositoryPrisma';
import {type RepositoryFactory} from './RepositoryFactory';

export class RepositoryFactoryPrisma implements RepositoryFactory {
	passwordResetRequestRepository: PasswordResetRequestRepository;
	accountRepository: AccountRepository;
	emailChangeRequestRepository: EmailChangeRequestRepository;
	contractWithdrawRequestRepository: ContractWithdrawRequestRepository;
	contractRepository: ContractRepository;
	productRepository: ProductRepository;
	notificationRepository: NotificationRepository;

	constructor(
		appPrisma: PrismaAppClient,
		rpPrisma: PrismaRpClient,
	) {
		this.passwordResetRequestRepository = new PasswordResetRequestRepositoryPrisma(appPrisma);
		this.accountRepository = new AccountRepositoryPrisma(rpPrisma, appPrisma);
		this.emailChangeRequestRepository = new EmailChangeRequestRepositoryPrisma(appPrisma);
		this.contractWithdrawRequestRepository = new ContractWithdrawRequestRepositoryPrisma(appPrisma);
		this.contractRepository = new ContractRepositoryPrisma(rpPrisma);
		this.productRepository = new ProductRepositoryPrisma(appPrisma);
		this.notificationRepository = new NotificationRepositoryPrisma(appPrisma);
	}
}

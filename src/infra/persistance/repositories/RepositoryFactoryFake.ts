import {AccountRepositoryFake} from './AccountRepository/AccountRepositoryFake';
import {ContractRepositoryFake} from './ContractRepository/ContractRepositoryFake';
import {ContractWithdrawRequestRepositoryFake} from './ContractWithdrawRequestRepository/ContractWithdrawRequestRepositoryFake';
import {type EmailChangeRequestRepository} from './EmailChangeRequestRepository/EmailChangeRequestRepository';
import {EmailChangeRequestRepositoryFake} from './EmailChangeRequestRepository/EmailChangeRequestRepositoryFake';
import {NotificationRepositoryFake} from './NotificationRepository/NotificationRepositoryFake';
import {PasswordResetRequestRepositoryFake} from './PasswordResetRequestRepository/PasswordResetRequestRepositoryFake';
import {ProductRepositoryFake} from './ProductRepositoryFake';
import {type RepositoryFactory} from './RepositoryFactory';

export class RepositoryFactoryFake implements RepositoryFactory {
	passwordResetRequestRepository: PasswordResetRequestRepositoryFake = new PasswordResetRequestRepositoryFake();
	accountRepository: AccountRepositoryFake = new AccountRepositoryFake();
	emailChangeRequestRepository: EmailChangeRequestRepository = new EmailChangeRequestRepositoryFake();
	contractWithdrawRequestRepository: ContractWithdrawRequestRepositoryFake = new ContractWithdrawRequestRepositoryFake();
	contractRepository: ContractRepositoryFake = new ContractRepositoryFake();
	notificationRepository: NotificationRepositoryFake = new NotificationRepositoryFake();
	productRepository: ProductRepositoryFake;

	constructor(appUrl: string) {
		this.productRepository = new ProductRepositoryFake(appUrl);
	}
}

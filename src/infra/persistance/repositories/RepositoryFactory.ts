import {type AccountRepository} from './AccountRepository/AccountRepository';
import {type ContractRepository} from './ContractRepository/ContractRepository';
import {type ContractWithdrawRequestRepository} from './ContractWithdrawRequestRepository/ContractWithdrawRequestRepository';
import {type EmailChangeRequestRepository} from './EmailChangeRequestRepository/EmailChangeRequestRepository';
import {type NotificationRepository} from './NotificationRepository/NotificationRepository';
import {type PasswordResetRequestRepository} from './PasswordResetRequestRepository/PasswordResetRequestRepository';
import {type ProductRepository} from './ProductRepository/ProductRepository';

export type RepositoryFactory = {
	passwordResetRequestRepository: PasswordResetRequestRepository;
	accountRepository: AccountRepository;
	emailChangeRequestRepository: EmailChangeRequestRepository;
	contractWithdrawRequestRepository: ContractWithdrawRequestRepository;
	contractRepository: ContractRepository;
	productRepository: ProductRepository;
	notificationRepository: NotificationRepository;
};

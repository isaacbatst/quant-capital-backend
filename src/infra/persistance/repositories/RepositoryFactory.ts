import {type AccountRepository} from './AccountRepository';
import {type ContractRepository} from './ContractRepository';
import {type ContractWithdrawRequestRepository} from './ContractWithdrawRequestRepository';
import {type EmailChangeRequestRepository} from './EmailChangeRequestRepository';
import {type NotificationRepository} from './NotificationRepository';
import {type PasswordResetRequestRepository} from './PasswordResetRequestRepository';
import {type ProductRepository} from './ProductRepository';

export type RepositoryFactory = {
	passwordResetRequestRepository: PasswordResetRequestRepository;
	accountRepository: AccountRepository;
	emailChangeRequestRepository: EmailChangeRequestRepository;
	contractWithdrawRequestRepository: ContractWithdrawRequestRepository;
	contractRepository: ContractRepository;
	productRepository: ProductRepository;
	notificationRepository: NotificationRepository;
};

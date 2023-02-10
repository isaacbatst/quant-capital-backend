import {type AccountRepository} from './AccountRepository';
import {type ContractRepository} from './ContractRepository';
import {type ContractWithdrawRequestRepository} from './ContractWithdrawRequestRepository';
import {type EmailChangeRequestRepository} from './EmailChangeRequestRepository';
import {type PasswordResetRequestRepository} from './PasswordResetRequestRepository';

export type RepositoryFactory = {
	passwordResetRequestRepository: PasswordResetRequestRepository;
	accountRepository: AccountRepository;
	emailChangeRequestRepository: EmailChangeRequestRepository;
	contractWithdrawRequestRepository: ContractWithdrawRequestRepository;
	contractRepository: ContractRepository;
};

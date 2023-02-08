import {type AccountRepository} from './AccountRepository';
import {type EmailChangeRequestRepository} from './EmailChangeRequestRepository';
import {type PasswordResetRequestRepository} from './PasswordResetRequestRepository';

export type RepositoryFactory = {
	passwordResetRequestRepository: PasswordResetRequestRepository;
	accountRepository: AccountRepository;
	emailChangeRequestRepository: EmailChangeRequestRepository;
};

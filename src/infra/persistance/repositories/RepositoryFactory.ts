import {type PasswordResetRequestRepository} from './PasswordResetRequestRepository';
import {type AccountRepository} from './AccountRepository';

export type RepositoryFactory = {
	passwordResetRequestRepository: PasswordResetRequestRepository;
	accountRepository: AccountRepository;
};

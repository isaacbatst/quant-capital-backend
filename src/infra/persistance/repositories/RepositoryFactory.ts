import {type PasswordResetRequestRepository} from './PasswordResetRequestRepository';
import {type UserRepository} from './UserRepository';

export type RepositoryFactory = {
	passwordResetRequestRepository: PasswordResetRequestRepository;
	userRepository: UserRepository;
};

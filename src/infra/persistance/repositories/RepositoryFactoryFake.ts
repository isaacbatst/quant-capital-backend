import {PasswordResetRequestRepositoryFake} from './PasswordResetRequestRepositoryFake';
import {type RepositoryFactory} from './RepositoryFactory';
import {UserRepositoryFake} from './UserRepositoryFake';

export class RepositoryFactoryFake implements RepositoryFactory {
	passwordResetRequestRepository: PasswordResetRequestRepositoryFake = new PasswordResetRequestRepositoryFake();
	userRepository: UserRepositoryFake = new UserRepositoryFake();
}

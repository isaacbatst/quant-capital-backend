import {PasswordResetRequestRepositoryFake} from './PasswordResetRequestRepositoryFake';
import {type RepositoryFactory} from './RepositoryFactory';
import {AccountRepositoryFake} from './AccountRepositoryFake';

export class RepositoryFactoryFake implements RepositoryFactory {
	passwordResetRequestRepository: PasswordResetRequestRepositoryFake = new PasswordResetRequestRepositoryFake();
	accountRepository: AccountRepositoryFake = new AccountRepositoryFake();
}

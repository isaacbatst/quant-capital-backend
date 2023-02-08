import {AccountRepositoryFake} from './AccountRepositoryFake';
import {type EmailChangeRequestRepository} from './EmailChangeRequestRepository';
import {EmailChangeRequestRepositoryFake} from './EmailChangeRequestRepositoryFake';
import {PasswordResetRequestRepositoryFake} from './PasswordResetRequestRepositoryFake';
import {type RepositoryFactory} from './RepositoryFactory';

export class RepositoryFactoryFake implements RepositoryFactory {
	passwordResetRequestRepository: PasswordResetRequestRepositoryFake = new PasswordResetRequestRepositoryFake();
	accountRepository: AccountRepositoryFake = new AccountRepositoryFake();
	emailChangeRequestRepository: EmailChangeRequestRepository = new EmailChangeRequestRepositoryFake();
}

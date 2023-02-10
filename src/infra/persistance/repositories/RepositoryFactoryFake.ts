import {AccountRepositoryFake} from './AccountRepositoryFake';
import {type ContractWithdrawRequestRepository} from './ContractWithdrawRequestRepository';
import {ContractWithdrawRequestRepositoryFake} from './ContractWithdrawRequestRepositoryFake';
import {type EmailChangeRequestRepository} from './EmailChangeRequestRepository';
import {EmailChangeRequestRepositoryFake} from './EmailChangeRequestRepositoryFake';
import {PasswordResetRequestRepositoryFake} from './PasswordResetRequestRepositoryFake';
import {type RepositoryFactory} from './RepositoryFactory';

export class RepositoryFactoryFake implements RepositoryFactory {
	passwordResetRequestRepository: PasswordResetRequestRepositoryFake = new PasswordResetRequestRepositoryFake();
	accountRepository: AccountRepositoryFake = new AccountRepositoryFake();
	emailChangeRequestRepository: EmailChangeRequestRepository = new EmailChangeRequestRepositoryFake();
	contractWithdrawRequestRepository: ContractWithdrawRequestRepository = new ContractWithdrawRequestRepositoryFake();
}

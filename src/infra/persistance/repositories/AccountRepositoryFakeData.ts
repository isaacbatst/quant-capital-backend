import {Account} from '../../../domain/entities/Account/Account';
import {EmailAddress} from '../../../domain/entities/Account/EmailAddress';

export class AccountRepositoryFakeData {
	static get accounts(): Array<{
		account: Account;
		sessionToken: string | undefined;
	}> {
		return [
			{
				account: new Account('25', new EmailAddress('test@email.com'), 'password-hash'),
				sessionToken: 'session-token',
			},
		];
	}
}

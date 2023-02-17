import {Account} from '../../../domain/entities/Account/Account';
import {EmailAddress} from '../../../domain/entities/Account/EmailAddress';

export class AccountRepositoryFakeData {
	static get accounts(): Array<{
		account: Account;
		sessionToken: string | undefined;
	}> {
		return [
			{
				account: new Account({
					id: '25', email: new EmailAddress('test@email.com'), passwordHash: 'password-hash', numericPasswordHash: 'numeric-hash',
				}),
				sessionToken: 'session-token',
			},
			{
				account: new Account({
					id: '62', email: new EmailAddress('test2@email.com'), passwordHash: 'password-hash', numericPasswordHash: 'numeric-hash',
				}),
				sessionToken: 'session-token-62',
			},
		];
	}
}

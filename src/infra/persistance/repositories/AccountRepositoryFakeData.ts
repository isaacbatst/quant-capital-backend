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
					id: '25',
					email: new EmailAddress('test25@email.com'),
					passwordHash: 'password-hash',
					numericPasswordHash: 'numeric-hash',
					name: 'Cliente 25',
				}),
				sessionToken: 'session-token-25',
			},
			{
				account: new Account({
					id: '62',
					name: 'Cliente 62',
					email: new EmailAddress('test62@email.com'),
					passwordHash: 'password-hash',
					numericPasswordHash: 'numeric-hash',
				}),
				sessionToken: 'session-token-62',
			},
		];
	}
}

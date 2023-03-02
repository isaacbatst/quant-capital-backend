import {Account} from '../../../domain/entities/Account/Account';
import {EmailAddress} from '../../../domain/entities/Account/EmailAddress';

export class AccountRepositoryFakeData {
	static get accounts(): Array<{
		account: Account;
		sessionTokens: string[];
		pushTokens: string[] | undefined;
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
				sessionTokens: ['session-token-25'],
				pushTokens: ['push-token-25'],
			},
			{
				account: new Account({
					id: '62',
					name: 'Cliente 62',
					email: new EmailAddress('test62@email.com'),
					passwordHash: 'password-hash',
					numericPasswordHash: 'numeric-hash',
				}),
				sessionTokens: ['session-token-62'],
				pushTokens: ['push-token-62-a', 'push-token-62-b'],
			},
		];
	}
}

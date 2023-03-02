import {vi} from 'vitest';
import {type Account} from '../../../domain/entities/Account/Account';
import {type EmailAddress} from '../../../domain/entities/Account/EmailAddress';
import {NotFoundError} from '../../../domain/errors/NotFoundError';
import {type AccountRepository} from './AccountRepository';
import {AccountRepositoryFakeData} from './AccountRepositoryFakeData';

export class AccountRepositoryFake implements AccountRepository {
	accounts: Array<{
		account: Account;
		sessionTokens: string[];
		pushTokens?: string[] | undefined;
	}> = AccountRepositoryFakeData.accounts;

	update = vi.fn(async (updatedAccount: Account) => {
		const foundIndex = this.accounts.findIndex(({account}) => account.getEmail().value === updatedAccount.getEmail().value);

		if (foundIndex < 0) {
			throw new NotFoundError('ACCOUNT_NOT_FOUND');
		}

		this.accounts[foundIndex].account = updatedAccount;
	});

	async getAccountPushTokens(accountId: string): Promise<string[]> {
		return this.accounts.find(({account}) => account.getId() === accountId)?.pushTokens ?? [];
	}

	async getByEmail(email: EmailAddress): Promise<Account | undefined> {
		return this.accounts.find(({account}) => account.getEmail().value === email.value)?.account;
	}

	async getBySessionToken(sessionToken: string): Promise<Account | undefined> {
		return this.accounts.find(account => account.sessionTokens?.includes(sessionToken))?.account;
	}

	async save(account: Account, sessionToken?: string): Promise<void> {
		const sessionTokens = sessionToken ? [sessionToken] : [];
		this.accounts.push({account, sessionTokens});
	}

	async saveSessionToken(sessionToken: string, accountId: string): Promise<void> {
		const foundIndex = this.accounts.findIndex(({account}) => account.getId() === accountId);
		this.accounts[foundIndex].sessionTokens.push(sessionToken);
	}

	async getAllWithPushToken(): Promise<Account[]> {
		return this.accounts
			.filter(({pushTokens: pushToken}) => pushToken && pushToken.length > 0)
			.map(({account}) => account);
	}
}

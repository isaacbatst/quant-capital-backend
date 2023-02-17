import {vi} from 'vitest';
import {type Account} from '../../../domain/entities/Account/Account';
import {NotFoundError} from '../../../domain/errors/NotFoundError';
import {type AccountRepository} from './AccountRepository';
import {AccountRepositoryFakeData} from './AccountRepositoryFakeData';

export class AccountRepositoryFake implements AccountRepository {
	accounts: Array<{account: Account; sessionToken: string | undefined}> = AccountRepositoryFakeData.accounts;
	update = vi.fn(async (updatedAccount: Account) => {
		const foundIndex = this.accounts.findIndex(({account}) => account.getEmail().value === updatedAccount.getEmail().value);

		if (foundIndex < 0) {
			throw new NotFoundError('ACCOUNT_NOT_FOUND');
		}

		this.accounts[foundIndex].account = updatedAccount;
	});

	async getByEmail(email: string): Promise<Account | undefined> {
		return this.accounts.find(({account}) => account.getEmail().value === email)?.account;
	}

	async getBySessionToken(sessionToken: string): Promise<Account | undefined> {
		return this.accounts.find(account => sessionToken === account.sessionToken)?.account;
	}

	async save(account: Account, sessionToken?: string): Promise<void> {
		this.accounts.push({account, sessionToken});
	}
}

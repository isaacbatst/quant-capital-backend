import {type Account} from '../../../domain/entities/Account';
import {type AccountRepository} from './AccountRepository';

export class AccountRepositoryFake implements AccountRepository {
	accounts: Account[] = [];

	async getByEmail(email: string): Promise<Account | undefined> {
		return this.accounts.find(account => account.getEmail().value === email);
	}

	async update(updatedAccount: Account): Promise<void> {
		const foundIndex = this.accounts.findIndex(account => account.getEmail().value === updatedAccount.getEmail().value);

		if (foundIndex < 0) {
			throw new Error('ACCOUNT_NOT_FOUND');
		}

		this.accounts[foundIndex] = updatedAccount;
	}

	async save(account: Account): Promise<void> {
		this.accounts.push(account);
	}
}

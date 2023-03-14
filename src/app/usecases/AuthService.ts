import {type Account} from '../../domain/entities/Account/Account';
import {type EmailAddress} from '../../domain/entities/Account/EmailAddress';
import {AuthError} from '../../domain/errors/AuthError';
import {type AccountRepository} from '../../infra/persistance/repositories/AccountRepository/AccountRepository';

export class AuthService {
	constructor(
		readonly accountRepository: AccountRepository,
	) {}

	async getAccountBySessionToken(sessionToken: string): Promise<Account> {
		const account = await this.accountRepository.getBySessionToken(sessionToken);
		if (!account) {
			throw new AuthError('UNAUTHENTICATED');
		}

		return account;
	}

	async getAccountByEmail(email: EmailAddress): Promise<Account> {
		const account = await this.accountRepository.getByEmail(email);
		if (!account) {
			throw new AuthError('ACCOUNT_NOT_FOUND');
		}

		return account;
	}
}

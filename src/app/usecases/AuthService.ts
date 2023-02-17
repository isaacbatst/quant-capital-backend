import {type Account} from '../../domain/entities/Account/Account';
import {AuthError} from '../../domain/errors/AuthError';
import {type AccountRepository} from '../../infra/persistance/repositories/AccountRepository';

export class AuthService {
	constructor(
		private readonly accountRepository: AccountRepository,
	) {}

	async getAccountBySessionToken(sessionToken: string): Promise<Account> {
		const account = await this.accountRepository.getBySessionToken(sessionToken);
		if (!account) {
			throw new AuthError('ACCOUNT_NOT_FOUND');
		}

		return account;
	}
}

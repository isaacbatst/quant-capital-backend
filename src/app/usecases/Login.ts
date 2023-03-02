import {EmailAddress} from '../../domain/entities/Account/EmailAddress';
import {AuthError} from '../../domain/errors/AuthError';
import {type AccountRepository} from '../../infra/persistance/repositories/AccountRepository';
import {type Encrypter} from '../../infra/util/Encrypter/Encrypter';
import {type TokenGenerator} from '../../infra/util/TokenGenerator/TokenGenerator';

export class Login {
	constructor(
		private readonly accountRepository: AccountRepository,
		private readonly encrypter: Encrypter,
		private readonly tokenGenerator: TokenGenerator,
	) {}

	async execute(email: string, password: string): Promise<string> {
		const emailAddress = new EmailAddress(email);
		const account = await this.accountRepository.getByEmail(emailAddress);

		if (!account) {
			throw new AuthError('WRONG_PASSWORD_OR_EMAIL');
		}

		const passwordHash = account.getPasswordHash();

		const isValid = await this.encrypter.compare(password, passwordHash);

		if (!isValid) {
			throw new AuthError('WRONG_PASSWORD_OR_EMAIL');
		}

		const sessionToken = await this.tokenGenerator.generate();
		await this.accountRepository.saveSessionToken(sessionToken, account.getId());

		return sessionToken;
	}
}

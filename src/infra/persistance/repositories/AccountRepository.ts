import {type Account} from '../../../domain/entities/Account/Account';
import {type AccountRegistrationData} from '../../../domain/entities/Account/AccountRegistrationData';
import {type EmailAddress} from '../../../domain/entities/Account/EmailAddress';

export type AccountRepository = {
	getByEmail(email: EmailAddress): Promise<Account | undefined>;
	getRegistrationData(accountId: string): Promise<AccountRegistrationData | undefined>;
	getBySessionToken(sessionToken: string): Promise<Account | undefined>;
	getAllPushTokens(): Promise<string[]>;
	getAccountPushTokens(accountId: string): Promise<string[]>;
	update(account: Account): Promise<void>;
	save(account: Account): Promise<void>;
	saveSessionToken(sessionToken: string, accountId: string): Promise<void>;
};

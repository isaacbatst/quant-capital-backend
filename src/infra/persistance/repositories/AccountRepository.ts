import {type Account} from '../../../domain/entities/Account/Account';

export type AccountRepository = {
	getByEmail(email: string): Promise<Account | undefined>;
	getBySessionToken(sessionToken: string): Promise<Account | undefined>;
	update(account: Account): Promise<void>;
	save(account: Account): Promise<void>;
};

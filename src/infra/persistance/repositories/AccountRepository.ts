import {type Account} from '../../../domain/entities/Account/Account';
import {type AccountRegistrationData} from '../../../domain/entities/Account/AccountRegistrationData';
import {type EmailAddress} from '../../../domain/entities/Account/EmailAddress';
import {type NotificationSettings} from '../../../domain/entities/NotificationSettings';

export type AccountRepository = {
	getByEmail(email: EmailAddress): Promise<Account | undefined>;
	getRegistrationData(accountId: string): Promise<AccountRegistrationData | undefined>;
	getNotificationsSettings(accountId: string): Promise<NotificationSettings | undefined>;
	getBySessionToken(sessionToken: string): Promise<Account | undefined>;
	getAllPushTokens(): Promise<string[]>;
	getAccountPushTokens(accountId: string): Promise<string[]>;
	update(account: Account): Promise<void>;
	updateNotificationSettings(accountId: string, settings: Partial<NotificationSettings>): Promise<void>;
	save(account: Account): Promise<void>;
	saveSessionToken(sessionToken: string, accountId: string): Promise<void>;
	savePushToken(pushToken: string, accountId: string): Promise<void>;
	removeSessionToken(accountId: string, sessionToken: string): Promise<void>;
	removePushToken(accountId: string, pushToken: string): Promise<void>;
};

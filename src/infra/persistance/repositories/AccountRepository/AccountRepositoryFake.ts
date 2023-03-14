import {type Account} from '../../../../domain/entities/Account/Account';
import {AccountRegistrationData} from '../../../../domain/entities/Account/AccountRegistrationData';
import {type EmailAddress} from '../../../../domain/entities/Account/EmailAddress';
import {type NotificationSettings} from '../../../../domain/entities/NotificationSettings';
import {NotFoundError} from '../../../../domain/errors/NotFoundError';
import {type AccountRepository} from './AccountRepository';
import {AccountRepositoryFakeData} from './AccountRepositoryFakeData';

export class AccountRepositoryFake implements AccountRepository {
	accounts: Array<{
		account: Account;
		sessionTokens: string[];
		pushTokens?: string[] | undefined;
		registrationData: AccountRegistrationData;
		notificationSettings: NotificationSettings;
	}> = AccountRepositoryFakeData.accounts;

	async getRegistrationData(accountId: string): Promise<AccountRegistrationData | undefined> {
		return this.accounts.find(account => account.account.getId() === accountId)?.registrationData;
	}

	async getNotificationsSettings(accountId: string): Promise<NotificationSettings | undefined> {
		return this.accounts.find(account => account.account.getId() === accountId)?.notificationSettings;
	}

	async update(updatedAccount: Account): Promise<void> {
		const foundIndex = this.accounts.findIndex(({account}) => account.getEmail().value === updatedAccount.getEmail().value);

		if (foundIndex < 0) {
			throw new NotFoundError('ACCOUNT_NOT_FOUND');
		}

		this.accounts[foundIndex].account = updatedAccount;
	}

	async updateNotificationSettings(accountId: string, settings: Partial<NotificationSettings>): Promise<void> {
		const foundIndex = this.accounts.findIndex(({account}) => account.getId() === accountId);

		this.accounts[foundIndex].notificationSettings = {
			announcements: settings.announcements ?? this.accounts[foundIndex].notificationSettings.announcements,
			eventsAndActions: settings.eventsAndActions ?? this.accounts[foundIndex].notificationSettings.eventsAndActions,
			newProducts: settings.newProducts ?? this.accounts[foundIndex].notificationSettings.newProducts,
		};
	}

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
		this.accounts.push({
			account,
			sessionTokens,
			registrationData: new AccountRegistrationData({
				birthDate: '02/02/1990',
				name: 'Caio de Oliveira Silva',
				cpf: '064.682.434-16',
				cep: '59124-543',
				street: 'Avenida Campos Sales',
				number: '901',
				complement: '312',
				district: 'Tirol',
				city: 'Natal',
				state: 'Rio Grande do Norte',
			}),
			notificationSettings: {
				announcements: false,
				eventsAndActions: false,
				newProducts: false,
			},
		});
	}

	async saveSessionToken(sessionToken: string, accountId: string): Promise<void> {
		const foundIndex = this.accounts.findIndex(({account}) => account.getId() === accountId);
		this.accounts[foundIndex].sessionTokens.push(sessionToken);
	}

	async getAllWithPushTokens(): Promise<Array<{account: Account; pushTokens: string[]}>> {
		return this.accounts.map(({account, pushTokens}) => ({
			account,
			pushTokens: pushTokens ?? [],
		}));
	}

	async removeSessionToken(accountId: string, sessionToken: string): Promise<void> {
		const account = this.accounts.find(account => account.account.getId() === accountId);
		if (!account) {
			throw new NotFoundError('ACCOUNT_NOT_FOUND');
		}

		account.sessionTokens = account.sessionTokens.filter(token => token !== sessionToken);
	}

	async removePushToken(accountId: string, pushToken: string): Promise<void> {
		const account = this.accounts.find(account => account.account.getId() === accountId);
		if (!account) {
			throw new NotFoundError('ACCOUNT_NOT_FOUND');
		}

		account.pushTokens = account.pushTokens?.filter(token => token !== pushToken);
	}

	async savePushToken(pushToken: string, accountId: string): Promise<void> {
		const account = this.accounts.find(account => account.account.getId() === accountId);
		if (!account) {
			throw new NotFoundError('ACCOUNT_NOT_FOUND');
		}

		account.pushTokens = account.pushTokens ? [...account.pushTokens, pushToken] : [pushToken];
	}
}

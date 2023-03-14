import {type PrismaClient as PrismaAppClient} from '../../../../prisma/generated/appClient';
import {type PrismaClient as PrismaRpClient} from '../../../../prisma/generated/rpClient';
import {Account} from '../../../domain/entities/Account/Account';
import {AccountRegistrationData} from '../../../domain/entities/Account/AccountRegistrationData';
import {EmailAddress} from '../../../domain/entities/Account/EmailAddress';
import {type NotificationSettings} from '../../../domain/entities/NotificationSettings';
import {type AccountRepository} from './AccountRepository';

export class AccountRepositoryPrisma implements AccountRepository {
	constructor(
		private readonly rpPrisma: PrismaRpClient,
		private readonly appPrisma: PrismaAppClient,
	) {}

	async getRegistrationData(accountId: string): Promise<AccountRegistrationData | undefined> {
		const client = await this.rpPrisma.cliente.findUnique({
			where: {
				id: Number(accountId),
			},
		});

		if (!client) {
			return undefined;
		}

		return new AccountRegistrationData({
			name: client.nome_fantasia ?? undefined,
			cpf: client.cpf_cnpj ?? undefined,
			birthDate: client.nascimento?.toLocaleDateString() ?? undefined,
			cep: client.cep ?? undefined,
			street: client.logradouro ?? undefined,
			number: client.numero ?? undefined,
			complement: client.complemento ?? undefined,
			district: client.bairro ?? undefined,
			city: client.cidade ?? undefined,
			state: client.uf ?? undefined,
		});
	}

	async getNotificationsSettings(accountId: string): Promise<NotificationSettings | undefined> {
		const client = await this.appPrisma.client.findUnique({
			where: {
				id: accountId,
			},
		});

		if (!client) {
			return undefined;
		}

		return {
			announcements: client.notifyAnnouncements,
			eventsAndActions: client.notifyEventsAndActions,
			newProducts: client.notifyNewProducts,
		};
	}

	async getBySessionToken(sessionToken: string): Promise<Account | undefined> {
		const session = await this.appPrisma.clientSession.findUnique({
			where: {
				token: sessionToken,
			},
			include: {
				client: true,
			},
		});

		if (!session) {
			return undefined;
		}

		const {client} = session;

		return new Account({
			email: new EmailAddress(client.email),
			id: client.id,
			name: client.name,
			numericPasswordHash: client.numericPasswordHash,
			passwordHash: client.passwordHash,
		});
	}

	async getAllPushTokens(): Promise<string[]> {
		const tokens = await this.appPrisma.clientPushToken.findMany();
		return tokens.map(({token}) => token);
	}

	async getAccountPushTokens(accountId: string): Promise<string[]> {
		const tokens = await this.appPrisma.clientPushToken.findMany({
			where: {
				clientId: accountId,
			},
		});
		return tokens.map(({token}) => token);
	}

	async update(account: Account): Promise<void> {
		await this.appPrisma.client.update({
			where: {
				id: account.getId(),
			},
			data: {
				email: account.getEmail().value,
				name: account.getName(),
				passwordHash: account.getPasswordHash(),
				numericPasswordHash: account.getNumericPasswordHash(),
			},
		});
	}

	async updateNotificationSettings(accountId: string, settings: Partial<NotificationSettings>): Promise<void> {
		await this.appPrisma.client.update({
			where: {
				id: accountId,
			},
			data: {
				notifyAnnouncements: settings.announcements,
				notifyEventsAndActions: settings.eventsAndActions,
				notifyNewProducts: settings.newProducts,
			},
		});
	}

	async save(account: Account): Promise<void> {
		await this.appPrisma.client.create({
			data: {
				id: account.getId(),
				email: account.getEmail().value,
				name: account.getName(),
				notifyAnnouncements: true,
				notifyEventsAndActions: true,
				notifyNewProducts: true,
				numericPasswordHash: account.getNumericPasswordHash(),
				passwordHash: account.getPasswordHash(),
			},
		});
	}

	async saveSessionToken(sessionToken: string, accountId: string): Promise<void> {
		await this.appPrisma.clientSession.create({
			data: {
				token: sessionToken,
				client: {
					connect: {
						id: accountId,
					},
				},
			},
		});
	}

	async removeSessionToken(accountId: string, sessionToken: string): Promise<void> {
		await this.appPrisma.clientSession.delete({
			where: {
				token: sessionToken,
			},
		});
	}

	async removePushToken(accountId: string, pushToken: string): Promise<void> {
		await this.appPrisma.clientPushToken.delete({
			where: {
				token: pushToken,
			},
		});
	}

	async savePushToken(pushToken: string, accountId: string): Promise<void> {
		await this.appPrisma.clientPushToken.create({
			data: {
				token: pushToken,
				client: {
					connect: {
						id: accountId,
					},
				},
			},
		});
	}

	async getByEmail(email: EmailAddress): Promise<Account | undefined> {
		const client = await this.appPrisma.client.findUnique({
			where: {
				email: email.value,
			},
		});

		if (!client) {
			return undefined;
		}

		return new Account({
			email: new EmailAddress(client.email),
			id: client.id,
			name: client.name,
			numericPasswordHash: client.numericPasswordHash,
			passwordHash: client.passwordHash,
		});
	}
}

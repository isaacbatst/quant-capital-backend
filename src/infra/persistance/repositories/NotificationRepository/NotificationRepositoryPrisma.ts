import {type Prisma} from '@prisma/client';
import {type NotificationType as PrismaNotificationType, type PrismaClient} from '../../../../../prisma/generated/appClient';
import {ClientNotification} from '../../../../domain/entities/Notification/ClientNotification';
import {NotificationType, type Notification} from '../../../../domain/entities/Notification/Notification';
import {type NotificationRepository} from './NotificationRepository';

export class NotificationRepositoryPrisma implements NotificationRepository {
	private static readonly toDomainType: Record<PrismaNotificationType, NotificationType> = {
		basic: NotificationType.basic,
		navigator: NotificationType.navigator,
	};

	constructor(private readonly appPrisma: PrismaClient) {}

	async save(notification: Notification): Promise<void> {
		await this.appPrisma.notification.create({
			data: {
				createdAt: notification.getCreatedAt(),
				id: notification.getId(),
				type: notification.getType(),
				body: notification.getBody(),
				title: notification.getTitle(),
				payload: (notification.getPayload() ?? {}) as Prisma.JsonObject,
			},
		});

		await this.appPrisma.notificationsClients.createMany({
			data: notification.getTo().map(clientId => ({
				notificationId: notification.getId(),
				clientId,
				isViewed: false,
			})),
		});
	}

	async updateClientNotification(clientNotification: ClientNotification): Promise<void> {
		await this.appPrisma.notificationsClients.updateMany({
			where: {
				notificationId: clientNotification.getNotification().id,
				clientId: clientNotification.getClientId(),
			},
			data: {
				isViewed: clientNotification.getIsViewed(),
			},
		});
	}

	async getClientNotification(clientId: string, notificationId: string): Promise<ClientNotification | undefined> {
		const clientNotification = await this.appPrisma.notificationsClients.findFirst({
			where: {
				notificationId,
				clientId,
			},
			include: {
				notification: true,
			},
		});

		if (!clientNotification) {
			return undefined;
		}

		return new ClientNotification(
			{
				body: clientNotification.notification.body,
				title: clientNotification.notification.title,
				type: NotificationRepositoryPrisma.toDomainType[clientNotification.notification.type],
				createdAt: clientNotification.notification.createdAt,
				payload: clientNotification.notification.payload as Record<string, unknown>,
				id: clientNotification.notification.id,
			},
			clientNotification.isViewed,
			clientNotification.clientId,
		);
	}

	async getUnreadNotificationsCount(accountId: string): Promise<number> {
		const notificationsCount = await this.appPrisma.notificationsClients.count({
			where: {
				clientId: accountId,
				isViewed: false,
			},
		});

		return notificationsCount;
	}

	async getClientNotifications(accountId: string, page: number, pageSize: number): Promise<ClientNotification[]> {
		const notifications = await this.appPrisma.notificationsClients.findMany({
			where: {
				clientId: accountId,
				isViewed: false,
			},
			include: {
				notification: true,
			},
			skip: page * pageSize,
			take: pageSize,
		});

		return notifications.map(notification => new ClientNotification(
			{
				body: notification.notification.body,
				title: notification.notification.title,
				type: NotificationRepositoryPrisma.toDomainType[notification.notification.type],
				createdAt: notification.notification.createdAt,
				payload: notification.notification.payload as Record<string, unknown>,
				id: notification.notification.id,
			},
			notification.isViewed,
			notification.clientId,
		));
	}
}

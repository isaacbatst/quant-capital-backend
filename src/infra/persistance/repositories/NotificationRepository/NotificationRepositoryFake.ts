import {ClientNotification} from '../../../../domain/entities/Notification/ClientNotification';
import {type Notification} from '../../../../domain/entities/Notification/Notification';
import {Paginator} from '../../../../domain/entities/Paginator';
import {NotFoundError} from '../../../../domain/errors/NotFoundError';
import {type NotificationRepository} from './NotificationRepository';
import {NotificationRepositoryFakeData} from './NotificationRepositoryFakeData';

export class NotificationRepositoryFake implements NotificationRepository {
	notifications = NotificationRepositoryFakeData.notifications;

	async save(notification: Notification): Promise<void> {
		this.notifications.push({notification, isViewed: false});
	}

	async getUnreadNotificationsCount(accountId: string): Promise<number> {
		return this.notifications
			.filter(({notification, isViewed}) => notification.getTo().includes(accountId) && !isViewed)
			.length;
	}

	async getClientNotifications(clientId: string, page: number, pageSize: number): Promise<ClientNotification[]> {
		const notifications = this.notifications
			.filter(({notification}) => notification.getTo().includes(clientId));

		return Paginator.getPage(notifications, page, pageSize)
			.map(({notification, isViewed}) => new ClientNotification({
				id: notification.getId(),
				body: notification.getBody(),
				title: notification.getTitle(),
				createdAt: notification.getCreatedAt(),
				type: notification.getType(),
			}, isViewed, clientId));
	}

	async getClientNotification(clientId: string, notificationId: string): Promise<ClientNotification | undefined> {
		const found = this.notifications
			.find(({notification}) => notification.getTo().includes(clientId) && notification.getId() === notificationId);

		return found ? new ClientNotification({
			body: found.notification.getBody(),
			createdAt: found.notification.getCreatedAt(),
			id: found.notification.getId(),
			title: found.notification.getTitle(),
			type: found.notification.getType(),
			payload: found.notification.getPayload(),
		}, found.isViewed, clientId) : undefined;
	}

	async updateClientNotification(clientNotification: ClientNotification): Promise<void> {
		const found = this.notifications
			.findIndex(({notification}) => (
				notification.getTo().includes(clientNotification.getClientId())
				&& notification.getId() === clientNotification.getNotification().id
			));

		if (found < 0) {
			throw new NotFoundError('NOTIFICATION_NOT_FOUND');
		}

		this.notifications[found] = {
			...this.notifications[found],
			isViewed: clientNotification.getIsViewed(),
		};
	}
}

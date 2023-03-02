import {ClientNotification} from '../../../domain/entities/Notification/ClientNotification';
import {type Notification} from '../../../domain/entities/Notification/Notification';
import {Paginator} from '../../../domain/entities/Paginator';
import {type NotificationRepository} from './NotificationRepository';
import {NotificationRepositoryFakeData} from './NotificationRepositoryFakeData';

export class NotificationRepositoryFake implements NotificationRepository {
	notifications = NotificationRepositoryFakeData.notifications;

	async save(notification: Notification): Promise<void> {
		this.notifications.push({notification, isViewed: false});
	}

	async getClientNotifications(clientTokens: string[], page: number, pageSize: number): Promise<ClientNotification[]> {
		const notifications = this.notifications
			.filter(({notification}) => clientTokens
				.find(clientToken => notification.getTo().includes(clientToken)));

		return Paginator.getPage(notifications, page, pageSize)
			.map(({notification, isViewed}) => new ClientNotification(notification, isViewed));
	}
}

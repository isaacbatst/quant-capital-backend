import {type ClientNotification} from '../../../../domain/entities/Notification/ClientNotification';
import {type Notification} from '../../../../domain/entities/Notification/Notification';

export type NotificationRepository = {
	save(notification: Notification): Promise<void>;
	updateClientNotification(clientNotification: ClientNotification): Promise<void>;
	getClientNotification(clientId: string, notificationId: string): Promise<ClientNotification | undefined>;
	getUnreadNotificationsCount(accountId: string): Promise<number>;
	getClientNotifications(accountId: string, page: number, pageSize: number): Promise<ClientNotification[]>;
};

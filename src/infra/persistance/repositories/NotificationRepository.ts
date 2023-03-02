import {type ClientNotification} from '../../../domain/entities/Notification/ClientNotification';
import {type Notification} from '../../../domain/entities/Notification/Notification';

export type NotificationRepository = {
	save(notification: Notification): Promise<void>;
	getUnreadNotificationsCount(accountId: string): Promise<number>;
	getClientNotifications(accountId: string, page: number, pageSize: number): Promise<ClientNotification[]>;
};

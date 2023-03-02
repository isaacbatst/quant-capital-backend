import {type ClientNotification} from '../../../domain/entities/Notification/ClientNotification';
import {type Notification} from '../../../domain/entities/Notification/Notification';

export type NotificationRepository = {
	save(notification: Notification): Promise<void>;
	getClientNotifications(clientTokens: string[], page: number, pageSize: number): Promise<ClientNotification[]>;
};

import {ConflictError} from '../../errors/ConflictError';
import {type NotificationType, type Notification} from './Notification';

type NotificationData = {
	payload?: Record<string, unknown>;
	id: string;
	type: NotificationType;
	title: string;
	body: string;
	createdAt: Date;
};

export class ClientNotification {
	constructor(
		private readonly notification: NotificationData,
		private isViewed: boolean,
		private readonly clientId: string,
	) {}

	view(): void {
		if (this.isViewed) {
			throw new ConflictError('ALREADY_VIEWED');
		}

		this.isViewed = true;
	}

	getClientId(): string {
		return this.clientId;
	}

	getNotification(): NotificationData {
		return this.notification;
	}

	getIsViewed(): boolean {
		return this.isViewed;
	}
}

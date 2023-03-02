import {ConflictError} from '../../errors/ConflictError';
import {type Notification} from './Notification';

export class ClientNotification {
	constructor(
		private readonly notification: Notification,
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

	getNotification(): Notification {
		return this.notification;
	}

	getIsViewed(): boolean {
		return this.isViewed;
	}
}

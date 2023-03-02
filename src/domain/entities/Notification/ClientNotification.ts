import {type Notification} from './Notification';

export class ClientNotification {
	constructor(
		private readonly notification: Notification,
		private readonly isViewed: boolean,
	) {}

	getNotification(): Notification {
		return this.notification;
	}

	getIsViewed(): boolean {
		return this.isViewed;
	}
}

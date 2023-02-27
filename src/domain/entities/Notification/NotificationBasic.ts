import {Notification, NotificationType, type NotificationParams} from './Notification';

export class NotificationBasic extends Notification {
	constructor(params: Omit<NotificationParams, 'type'>) {
		super({
			...params,
			type: NotificationType.basic,
		});
	}
}

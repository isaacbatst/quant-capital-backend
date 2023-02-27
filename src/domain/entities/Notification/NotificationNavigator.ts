import {Notification, type NotificationParams, NotificationType} from './Notification';

export enum AppRoutePath {
	products = 'products',
	product = 'product',
	myAccount = 'myAccount',
}

export type PushNotificationNavigatorPayload = {
	to: string;
	params?: Record<string, unknown>;
	external?: boolean;
};

export type NotificationNavigatorParams = Omit<NotificationParams, 'type'> & {
	payload: PushNotificationNavigatorPayload;
};

export class NotificationNavigator extends Notification {
	private readonly payload: PushNotificationNavigatorPayload;
	constructor(params: NotificationNavigatorParams) {
		super({
			...params,
			type: NotificationType.navigator,
		});
		this.payload = params.payload;
	}

	getPayload(): PushNotificationNavigatorPayload {
		return this.payload;
	}
}

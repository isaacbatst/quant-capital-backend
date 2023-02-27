import {type Notification, NotificationType} from './Notification';
import {NotificationBasic} from './NotificationBasic';
import {NotificationNavigator} from './NotificationNavigator';

type NotificationFactoryBasicParams = {
	id: string;
	type: string;
	title: string;
	body: string;
	createdAt: Date;
	payload?: Record<string, unknown>;
};

type NotificationFactoryParams = NotificationFactoryBasicParams
| (NotificationFactoryBasicParams & {
	payload: NotificationFactoryBasicParams;
	type: NotificationType.navigator;
});

export class NotificationFactory {
	static create(
		params: NotificationFactoryParams,
	): Notification {
		if (params.type === NotificationType.basic) {
			return new NotificationBasic(params);
		}

		if (params.type === NotificationType.navigator) {
			return new NotificationNavigator(params as any);
		}

		throw new Error('INVALID_NOTIFICATION_TYPE');
	}
}

import {type NotificationType} from '../../domain/entities/Notification/Notification';
import {NotificationNavigator} from '../../domain/entities/Notification/NotificationNavigator';
import {type NotificationRepository} from '../../infra/persistance/repositories/NotificationRepository';
import {type AuthService} from './AuthService';

export type PushNotification = {
	type: NotificationType;
	payload?: Record<string, unknown>;
};

export type PushNotificationBasic = {
	type: NotificationType.basic;
};

export type PushNotificationNavigatorPayload = {
	to: string;
	params?: Record<string, unknown>;
	external?: boolean;
};

export type PushNotificationNavigator = {
	type: NotificationType.navigator;
	payload: PushNotificationNavigatorPayload;
};

export type OutputNotification = PushNotification & {
	id: string;
	title: string;
	body: string;
	isViewed: boolean;
};

export type UserNotificationBasic = OutputNotification & PushNotificationBasic;

export enum InternalRoutePath {
	products = 'products',
	product = 'product',
	myAccount = 'myAccount',
}

export type UserNotificationNavigator = OutputNotification & PushNotificationNavigator;

type Output = OutputNotification;

export class GetNotifications {
	static get pageSize() {
		return 15;
	}

	constructor(
		private readonly notificationsRepository: NotificationRepository,
		private readonly authService: AuthService,
	) {}

	async execute(params: {
		sessionToken: string;
		page: number;
	}): Promise<Output[]> {
		const account = await this.authService.getAccountBySessionToken(params.sessionToken);
		const notifications = await this.notificationsRepository.getClientNotifications(
			account.getId(),
			params.page,
			GetNotifications.pageSize,
		);
		return notifications.map(clientNotification => {
			const notification = clientNotification.getNotification();
			const isViewed = clientNotification.getIsViewed();

			let payload: Record<string, unknown> = {};

			if (notification instanceof NotificationNavigator) {
				payload = notification.getPayload();
			}

			return ({
				type: notification.getType(),
				id: notification.getId(),
				title: notification.getTitle(),
				body: notification.getBody(),
				payload,
				isViewed,
			});
		});
	}
}

export enum NotificationType {
	basic = 'basic',
	navigator = 'navigator',
}

export type NotificationParams = {
	id: string;
	type: NotificationType;
	title: string;
	body: string;
	createdAt: Date;
};

export abstract class Notification {
	private readonly id: string;
	private readonly type: NotificationType;
	private readonly title: string;
	private readonly body: string;
	private readonly createdAt: Date;

	constructor(
		params: NotificationParams,
	) {
		this.id = params.id;
		this.type = params.type;
		this.title = params.title;
		this.body = params.body;
		this.createdAt = params.createdAt;
		this.validateTitle();
		this.validateBody();
	}

	getId(): string {
		return this.id;
	}

	getCreatedAt(): Date {
		return this.createdAt;
	}

	getType(): NotificationType {
		return this.type;
	}

	getTitle(): string {
		return this.title;
	}

	getBody(): string {
		return this.body;
	}

	private validateTitle(): void {
		if (!this.title) {
			throw new Error('EMPTY_TITLE');
		}
	}

	private validateBody(): void {
		if (!this.body) {
			throw new Error('EMPTY_BODYS');
		}
	}
}

// Export type UserNotification = PushNotification & {
// 	id: string;
// 	title: string;
// 	body: string;
// 	isViewed: boolean;
// };

// export type UserNotificationBasic = UserNotification & PushNotificationBasic;

// export enum InternalRoutePath {
// 	products = 'products',
// 	product = 'product',
// 	myAccount = 'myAccount',
// }

// export type UserNotificationNavigator = UserNotification & PushNotificationNavigator;

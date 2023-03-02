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
	to: string[];
};

export abstract class Notification {
	private readonly id: string;
	private readonly type: NotificationType;
	private readonly title: string;
	private readonly body: string;
	private readonly createdAt: Date;
	private readonly to: string[];

	constructor(
		params: NotificationParams,
	) {
		this.id = params.id;
		this.type = params.type;
		this.title = params.title;
		this.body = params.body;
		this.createdAt = params.createdAt;
		this.to = params.to;
		this.validateTitle();
		this.validateBody();
		this.validateTo();
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

	getTo(): string[] {
		return this.to;
	}

	private validateTo(): void {
		if (this.to.length === 0) {
			throw new Error('EMPTY_TO');
		}
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

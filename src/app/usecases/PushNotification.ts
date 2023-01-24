type NotificationGateway = {
	push(to: string | string[], title: string, body: string): Promise<void>;
};

type Input = {
	to: string | string[];
	title: string;
	body: string;
};

export class PushNotification {
	constructor(
		readonly notificationGateway: NotificationGateway,
	) {}

	async execute(input: Input) {
		await this.notificationGateway.push(input.to, input.title, input.body);
	}
}

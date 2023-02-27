import {type Notification} from '../../domain/entities/Notification/Notification';
import {NotificationFactory} from '../../domain/entities/Notification/NotificationFactory';
import {type IdGenerator} from '../../infra/util/IdGenerator/IdGenerator';

type NotificationGateway = {
	push(to: string | string[], title: string, body: string): Promise<void>;
};

type NotificationRepository = {
	save(notification: Notification): Promise<void>;
};

type Input = {
	to: string | string[];
	title: string;
	body: string;
	type: string;
	payload: Record<string, unknown>;
};

export class PushNotification {
	constructor(
		readonly notificationGateway: NotificationGateway,
		readonly notificationRepository: NotificationRepository,
		readonly idGenerator: IdGenerator,
	) {}

	async execute(input: Input) {
		const notification = NotificationFactory.create({
			title: input.title,
			body: input.body,
			type: input.type,
			id: await this.idGenerator.generate(),
			createdAt: new Date(),
			payload: input.payload,
		});

		await this.notificationGateway.push(input.to, input.title, input.body);
		await this.notificationRepository.save(notification);
	}
}

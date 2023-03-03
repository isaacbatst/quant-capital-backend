import {type Notification} from '../../domain/entities/Notification/Notification';
import {NotificationFactory} from '../../domain/entities/Notification/NotificationFactory';
import {type AccountRepository} from '../../infra/persistance/repositories/AccountRepository';
import {type NotificationRepository} from '../../infra/persistance/repositories/NotificationRepository';
import {type IdGenerator} from '../../infra/util/IdGenerator/IdGenerator';

type NotificationGateway = {
	push(notification: Notification): Promise<void>;
};

type Input = {
	title: string;
	body: string;
	type: string;
	payload: Record<string, unknown>;
};

export class PushNotification {
	constructor(
		readonly notificationGateway: NotificationGateway,
		readonly notificationRepository: NotificationRepository,
		readonly accountRepository: AccountRepository,
		readonly idGenerator: IdGenerator,
	) {}

	async execute(input: Input) {
		const pushTokens = await this.accountRepository.getAllPushTokens();

		const notification = NotificationFactory.create({
			title: input.title,
			body: input.body,
			type: input.type,
			id: await this.idGenerator.generate(),
			createdAt: new Date(),
			payload: input.payload,
			to: pushTokens,
		});
		await this.notificationGateway.push(notification);
		await this.notificationRepository.save(notification);
	}
}

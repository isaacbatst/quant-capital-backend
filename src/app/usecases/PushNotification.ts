import {type Notification} from '../../domain/entities/Notification/Notification';
import {NotificationFactory} from '../../domain/entities/Notification/NotificationFactory';
import {type AccountRepository} from '../../infra/persistance/repositories/AccountRepository/AccountRepository';
import {type NotificationRepository} from '../../infra/persistance/repositories/NotificationRepository/NotificationRepository';
import {type IdGenerator} from '../../infra/util/IdGenerator/IdGenerator';

type NotificationGateway = {
	push(notification: Notification, tokens: string[]): Promise<void>;
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
		const accounts = await this.accountRepository.getAllWithPushTokens();

		const notification = NotificationFactory.create({
			title: input.title,
			body: input.body,
			type: input.type,
			id: await this.idGenerator.generate(),
			createdAt: new Date(),
			payload: input.payload,
			to: accounts.map(({account}) => account.getId()),
		});

		const tokens = accounts.flatMap(({pushTokens}) => pushTokens);

		await this.notificationGateway.push(notification, tokens);
		await this.notificationRepository.save(notification);
	}
}

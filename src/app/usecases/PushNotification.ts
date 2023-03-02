import {type Account} from '../../domain/entities/Account/Account';
import {NotificationFactory} from '../../domain/entities/Notification/NotificationFactory';
import {type AccountRepository} from '../../infra/persistance/repositories/AccountRepository';
import {type NotificationRepository} from '../../infra/persistance/repositories/NotificationRepository';
import {type IdGenerator} from '../../infra/util/IdGenerator/IdGenerator';

type NotificationGateway = {
	push(to: Account[], title: string, body: string): Promise<void>;
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
		const notification = NotificationFactory.create({
			title: input.title,
			body: input.body,
			type: input.type,
			id: await this.idGenerator.generate(),
			createdAt: new Date(),
			payload: input.payload,
		});
		const accounts = await this.accountRepository.getAllWithPushToken();
		await this.notificationGateway.push(accounts, input.title, input.body);
		await this.notificationRepository.save(notification);
	}
}

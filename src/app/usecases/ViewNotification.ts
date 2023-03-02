import {NotFoundError} from '../../domain/errors/NotFoundError';
import {type NotificationRepository} from '../../infra/persistance/repositories/NotificationRepository';
import {type AuthService} from './AuthService';

export class ViewNotification {
	constructor(
		private readonly notificationRepository: NotificationRepository,
		private readonly authService: AuthService,
	) {

	}

	async execute(params: {
		sessionToken: string;
		notificationId: string;
	}) {
		const account = await this.authService.getAccountBySessionToken(params.sessionToken);
		const clientNotification = await this.notificationRepository.getClientNotification(
			account.getId(),
			params.notificationId,
		);
		if (!clientNotification) {
			throw new NotFoundError('NOTIFICATION_NOT_FOUND');
		}

		clientNotification.view();
		await this.notificationRepository.updateClientNotification(clientNotification);
	}
}

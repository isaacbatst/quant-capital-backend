import {type NotificationSettings} from '../../domain/entities/NotificationSettings';
import {NotFoundError} from '../../domain/errors/NotFoundError';
import {type AuthService} from './AuthService';

export class GetNotificationsSettings {
	constructor(
		private readonly authService: AuthService,
	) {}

	async execute(sessionToken: string): Promise<NotificationSettings> {
		const account = await this.authService.getAccountBySessionToken(sessionToken);
		const notificationsSettings = await this.authService.accountRepository.getNotificationsSettings(account.getId());
		if (!notificationsSettings) {
			throw new NotFoundError('NOTIFICATIONS_SETTINGS_NOT_FOUND');
		}

		return notificationsSettings;
	}
}

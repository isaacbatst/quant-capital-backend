import {type NotificationSettings} from '../../domain/entities/NotificationSettings';
import {type AuthService} from './AuthService';

type Input = {
	sessionToken: string;
	settings: Partial<NotificationSettings>;
};

export class UpdateNotificationSettings {
	constructor(
		private readonly authService: AuthService,
	) {}

	async execute(input: Input): Promise<void> {
		const account = await this.authService.getAccountBySessionToken(input.sessionToken);
		await this.authService.accountRepository.updateNotificationSettings(account.getId(), input.settings);
	}
}

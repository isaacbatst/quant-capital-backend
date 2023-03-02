import {type NotificationRepository} from '../../infra/persistance/repositories/NotificationRepository';
import {type AuthService} from './AuthService';

export class GetUnreadNotificationsCount {
	constructor(
		private readonly notificationsRepository: NotificationRepository,
		private readonly authService: AuthService,
	) {}

	async execute(params: {
		sessionToken: string;
	}) {
		const account = await this.authService.getAccountBySessionToken(params.sessionToken);
		const unreadNotificationsCount = await this.notificationsRepository.getUnreadNotificationsCount(account.getId());
		return unreadNotificationsCount;
	}
}

import {type Request, type Response} from 'express';
import {type GetNotificationsSettings} from '../../app/usecases/GetNotificationsSettings';
import {HeadersHelper} from '../util/HeadersHelper';

export class GetNotificationSettingsController {
	constructor(
		private readonly getNotificationSettings: GetNotificationsSettings,
	) {}

	async handle(request: Request, response: Response) {
		const sessionToken = HeadersHelper.getSessionToken(request.headers);
		const notificationSettings = await this.getNotificationSettings.execute(sessionToken);
		return response.json(notificationSettings);
	}
}

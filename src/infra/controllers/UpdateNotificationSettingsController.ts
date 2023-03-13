/* eslint-disable @typescript-eslint/naming-convention */
import {type Request, type Response} from 'express';
import {z} from 'zod';
import {type UpdateNotificationSettings} from '../../app/usecases/UpdateNotificationSettings';
import {HeadersHelper} from '../util/HeadersHelper';

export class UpdateNotificationSettingsController {
	private static readonly bodySchema = z.object({
		announcements: z.boolean({
			invalid_type_error: 'INVALID_ANNOUNCEMENTS',
		}).optional(),
		newProducts: z.boolean({
			invalid_type_error: 'INVALID_NEW_PRODUCTS',
		}).optional(),
		eventsAndActions: z.boolean({
			invalid_type_error: 'INVALID_EVENTS_AND_ACTIONS',
		}).optional(),
	});

	constructor(
		private readonly updateNotificationSettings: UpdateNotificationSettings,
	) {}

	async handle(req: Request, res: Response) {
		const sessionToken = HeadersHelper.getSessionToken(req.headers);
		const {announcements, newProducts, eventsAndActions} = await UpdateNotificationSettingsController.bodySchema.parseAsync(req.body);
		await this.updateNotificationSettings.execute({
			sessionToken,
			settings: {
				announcements, newProducts, eventsAndActions,
			},
		});
		return res.status(204).end();
	}
}

/* eslint-disable @typescript-eslint/naming-convention */
import {type Request, type Response} from 'express';
import {z} from 'zod';
import {type GetNotifications} from '../../app/usecases/GetNotifications';
import {HeadersHelper} from '../util/HeadersHelper';

export class GetNotificationsController {
	private static readonly querySchema = z.object({
		page: z.number({
			invalid_type_error: 'INVALID_PAGE_TYPE',
			required_error: 'REQUIRED_PAGE',
			coerce: true,
		}),
	});

	constructor(
		private readonly getNotifications: GetNotifications,
	) {}

	async handle(req: Request, res: Response) {
		const {page} = GetNotificationsController.querySchema.parse(req.query);
		const sessionToken = HeadersHelper.getSessionToken(req.headers);
		const notifications = await this.getNotifications.execute({sessionToken, page});
		return res.json(notifications);
	}
}


import {type Request, type Response} from 'express';
import {type GetUnreadNotificationsCount} from '../../app/usecases/GetUnreadNotificationsCount';
import {HeadersHelper} from '../util/HeadersHelper';

export class GetUnreadNotificationsCountController {
	constructor(
		private readonly getUnreadNotificationsCount: GetUnreadNotificationsCount,
	) {}

	async handle(req: Request, res: Response) {
		const sessionToken = HeadersHelper.getSessionToken(req.headers);
		const count = await this.getUnreadNotificationsCount.execute({sessionToken});
		return res.json({count});
	}
}

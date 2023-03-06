import {type Request, type Response} from 'express';
import {type ViewNotification} from '../../app/usecases/ViewNotification';
import {HeadersHelper} from '../util/HeadersHelper';

export class ViewNotificationController {
	constructor(
		private readonly viewNotification: ViewNotification,
	) {}

	async handle(req: Request, res: Response) {
		const sessionToken = HeadersHelper.getSessionToken(req.headers);
		await this.viewNotification.execute({sessionToken, notificationId: req.params.id});
		return res.status(204).end();
	}
}

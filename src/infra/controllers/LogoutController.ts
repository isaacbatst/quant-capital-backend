import {type Request, type Response} from 'express';
import {type Logout} from '../../app/usecases/Logout';
import {HeadersHelper} from '../util/HeadersHelper';

export class LogoutController {
	constructor(private readonly logout: Logout) {}

	async handle(req: Request, res: Response) {
		const sessionToken = HeadersHelper.getSessionToken(req.headers);
		await this.logout.execute(sessionToken);
		return res.status(204).end();
	}
}

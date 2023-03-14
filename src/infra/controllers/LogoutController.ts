/* eslint-disable @typescript-eslint/naming-convention */
import {type Request, type Response} from 'express';
import {z} from 'zod';
import {type Logout} from '../../app/usecases/Logout';
import {HeadersHelper} from '../util/HeadersHelper';

export class LogoutController {
	private static readonly bodySchema = z.object({
		pushToken: z.string({
			invalid_type_error: 'PUSH_TOKEN_INVALID_TYPE',
		}).optional(),
	});

	constructor(private readonly logout: Logout) {}

	async handle(req: Request, res: Response) {
		const {pushToken} = LogoutController.bodySchema.parse(req.body);
		const sessionToken = HeadersHelper.getSessionToken(req.headers);
		await this.logout.execute(sessionToken, pushToken);
		return res.status(204).end();
	}
}

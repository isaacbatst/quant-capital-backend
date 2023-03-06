import {type Request, type Response} from 'express';
import {type GetUser} from '../../app/usecases/GetUser';
import {HeadersHelper} from '../util/HeadersHelper';

export class GetUserController {
	constructor(
		private readonly getUser: GetUser,
	) {}

	async handle(req: Request, res: Response) {
		const sessionToken = HeadersHelper.getSessionToken(req.headers);
		const user = await this.getUser.execute({sessionToken});
		return res.json(user);
	}
}

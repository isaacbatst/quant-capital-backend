import {type Request, type Response} from 'express';
import {type GetUser} from '../../app/usecases/GetUser';

export class GetUserController {
	constructor(
		private readonly getUser: GetUser,
	) {}

	async handle(req: Request, res: Response) {
		if (!req.headers.authorization) {
			return res.status(401).json({
				error: 'UNAUTHORIZED',
			});
		}

		const sessionToken = req.headers.authorization.split(' ')[1]; // "Bearer token"
		const user = await this.getUser.execute({sessionToken});
		return res.json(user);
	}
}

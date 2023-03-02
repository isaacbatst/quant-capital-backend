/* eslint-disable @typescript-eslint/naming-convention */
import {type Request, type Response} from 'express';
import {z} from 'zod';
import {type Login} from '../../app/usecases/Login';

export class LoginController {
	static bodySchema = z.object({
		email: z.string({
			required_error: 'EMAIL_REQUIRED',
			invalid_type_error: 'EMAIL_INVALID_TYPE',
		}),
		password: z.string({
			required_error: 'PASSWORD_REQUIRED',
			invalid_type_error: 'PASSWORD_INVALID_TYPE',
		}),
	});

	constructor(
		private readonly login: Login,
	) {}

	async handle(req: Request, res: Response) {
		const validation = await LoginController.bodySchema.safeParseAsync(req.body);

		if (!validation.success) {
			throw validation.error;
		}

		const token = await this.login.execute(validation.data.email, validation.data.password);
		res.status(200).json({token});
	}
}

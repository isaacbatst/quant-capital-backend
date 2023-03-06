/* eslint-disable @typescript-eslint/naming-convention */
import {type Request, type Response} from 'express';
import {z} from 'zod';
import {type ChangePassword} from '../../app/usecases/ChangePassword';
import {HeadersHelper} from '../util/HeadersHelper';

export class ChangePasswordController {
	static bodySchema = z.object({
		password: z.string({
			invalid_type_error: 'PASSWORD_INVALID_TYPE',
			required_error: 'PASSWORD_REQUIRED',
		}),
	});

	constructor(
		private readonly changePassword: ChangePassword,
	) {}

	async handle(req: Request, res: Response) {
		const {password} = await ChangePasswordController.bodySchema.parseAsync(req.body);
		const sessionToken = HeadersHelper.getSessionToken(req.headers);
		await this.changePassword.execute({
			password,
			sessionToken,
		});
		return res.status(204).end();
	}
}

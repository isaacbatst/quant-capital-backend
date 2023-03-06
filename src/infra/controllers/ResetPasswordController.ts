/* eslint-disable @typescript-eslint/naming-convention */
import {type Request, type Response} from 'express';
import {z} from 'zod';
import {type ResetPassword} from '../../app/usecases/ResetPassword';

export class ResetPasswordController {
	private static readonly bodySchema = z.object({
		password: z.string({
			invalid_type_error: 'INVALID_PASSWORD_TYPE',
			required_error: 'REQUIRED_PASSWORD',
		}),
		token: z.string({
			invalid_type_error: 'INVALID_TOKEN_TYPE',
			required_error: 'REQUIRED_TOKEN',
		}),
	});

	constructor(private readonly resetPassword: ResetPassword) {}

	async handle(req: Request, res: Response) {
		const {password, token} = await ResetPasswordController.bodySchema.parseAsync(req.body);
		await this.resetPassword.execute({password, token});
		return res.status(204).end();
	}
}

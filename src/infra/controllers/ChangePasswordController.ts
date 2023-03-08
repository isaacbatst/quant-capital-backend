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
		currentPassword: z.string({
			invalid_type_error: 'CURRENT_PASSWORD_INVALID_TYPE',
			required_error: 'CURRENT_PASSWORD_REQUIRED',
		}),
		passwordConfirmation: z.string({
			invalid_type_error: 'PASSWORD_CONFIRMATION_INVALID_TYPE',
			required_error: 'PASSWORD_CONFIRMATION_REQUIRED',
		}),
	});

	constructor(
		private readonly changePassword: ChangePassword,
	) {}

	async handle(req: Request, res: Response) {
		const {password, currentPassword, passwordConfirmation} = await ChangePasswordController.bodySchema.parseAsync(req.body);
		const sessionToken = HeadersHelper.getSessionToken(req.headers);
		await this.changePassword.execute({
			password,
			sessionToken,
			currentPassword,
			passwordConfirmation,
		});
		return res.status(204).end();
	}
}

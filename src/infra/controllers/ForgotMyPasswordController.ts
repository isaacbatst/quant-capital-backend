/* eslint-disable @typescript-eslint/naming-convention */
import {type Request, type Response} from 'express';
import {z} from 'zod';
import {type ForgotMyPassword} from '../../app/usecases/ForgotMyPassword';

export class ForgotMyPasswordController {
	private static readonly bodySchema = z.object({
		email: z.string({
			invalid_type_error: 'INVALID_EMAIL_TYPE',
			required_error: 'REQUIRED_EMAIL',
		}),
	});

	constructor(
		private readonly forgotMyPassword: ForgotMyPassword,
	) {}

	async handle(req: Request, res: Response) {
		const {email} = await ForgotMyPasswordController.bodySchema.parseAsync(req.body);
		await this.forgotMyPassword.execute({email});
		return res.status(204).end();
	}
}

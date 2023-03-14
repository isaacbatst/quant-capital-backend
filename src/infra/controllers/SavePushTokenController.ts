/* eslint-disable @typescript-eslint/naming-convention */
import {type Request, type Response} from 'express';
import {z} from 'zod';
import {type SavePushToken} from '../../app/usecases/SavePushToken';
import {HeadersHelper} from '../util/HeadersHelper';

export class SavePushTokenController {
	static bodySchema = z.object({
		pushToken: z.string({
			required_error: 'PUSH_TOKEN_REQUIRED',
			invalid_type_error: 'PUSH_TOKEN_INVALID_TYPE',
		}),
	});

	constructor(private readonly savePushToken: SavePushToken) {}

	async handle(request: Request, response: Response) {
		const sessionToken = HeadersHelper.getSessionToken(request.headers);
		const {pushToken} = SavePushTokenController.bodySchema.parse(request.body);
		await this.savePushToken.execute({sessionToken, pushToken});
		return response.status(201).send();
	}
}

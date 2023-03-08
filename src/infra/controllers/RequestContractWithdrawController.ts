/* eslint-disable @typescript-eslint/naming-convention */
import {type Request, type Response} from 'express';
import {z} from 'zod';
import {type RequestContractWithdraw} from '../../app/usecases/RequestContractWithdraw';
import {HeadersHelper} from '../util/HeadersHelper';

export class RequestContractWithdrawController {
	static bodySchema = z.object({
		contractId: z.string({
			required_error: 'CONTRACT_ID_REQUIRED',
			invalid_type_error: 'CONTRACT_ID_INVALID_TYPE',
		}),
		numericPassword: z.string({
			required_error: 'NUMERIC_PASSWORD_REQUIRED',
			invalid_type_error: 'NUMERIC_PASSWORD_INVALID_TYPE',
		}),
		value: z.number({
			required_error: 'VALUE_REQUIRED',
			invalid_type_error: 'VALUE_INVALID_TYPE',
		}),
	});

	constructor(
		private readonly requestContractWithdraw: RequestContractWithdraw,
	) {}

	async handle(req: Request, res: Response) {
		const {contractId, numericPassword, value} = await RequestContractWithdrawController.bodySchema.parseAsync(req.body);
		const sessionToken = HeadersHelper.getSessionToken(req.headers);

		await this.requestContractWithdraw.execute({
			contractId,
			numericPassword,
			sessionToken,
			value,
		});

		return res.status(204).end();
	}
}

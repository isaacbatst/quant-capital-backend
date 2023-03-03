/* eslint-disable @typescript-eslint/naming-convention */
import {type Request, type Response} from 'express';
import {z} from 'zod';
import {type GetTransactions} from '../../app/usecases/GetTransactions';
import {HeadersHelper} from '../util/HeadersHelper';

export class GetTransactionsController {
	static querySchema = z.object({
		page: z.number({
			invalid_type_error: 'INVALID_PAGE_TYPE',
			required_error: 'REQUIRED_PAGE',
			coerce: true,
		}),
	});

	constructor(
		private readonly getTransactions: GetTransactions,
	) {}

	async handle(req: Request, res: Response) {
		const {page} = await GetTransactionsController.querySchema.parseAsync(req.query);
		const sessionToken = HeadersHelper.getAuthorizationHeader(req.headers);
		const transactions = await this.getTransactions.execute({sessionToken, page});
		return res.json(transactions);
	}
}

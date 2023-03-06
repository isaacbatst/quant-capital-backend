import {type Request, type Response} from 'express';
import {type GetLastTransactions} from '../../app/usecases/GetLastTransactions';
import {HeadersHelper} from '../util/HeadersHelper';

export class GetLastTransactionsController {
	constructor(
		private readonly getLastTransactions: GetLastTransactions,
	) {}

	async handle(req: Request, res: Response) {
		const sessionToken = HeadersHelper.getSessionToken(req.headers);
		const transactions = await this.getLastTransactions.execute({sessionToken});
		return res.json(transactions);
	}
}

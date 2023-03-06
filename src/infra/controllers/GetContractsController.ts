import {type Request, type Response} from 'express';
import {type GetContracts} from '../../app/usecases/GetContracts';
import {HeadersHelper} from '../util/HeadersHelper';

export class GetContractsController {
	constructor(
		private readonly getContracts: GetContracts,
	) {}

	async handle(req: Request, res: Response) {
		const sessionToken = HeadersHelper.getSessionToken(req.headers);
		const contracts = await this.getContracts.execute({sessionToken});
		return res.json(contracts);
	}
}

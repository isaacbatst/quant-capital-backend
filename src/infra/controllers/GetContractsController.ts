import {type Request, type Response} from 'express';
import {type GetContracts} from '../../app/usecases/GetContracts';

export class GetContractsController {
	constructor(
		private readonly getContracts: GetContracts,
	) {}

	async handle(req: Request, res: Response) {
		if (!req.headers.authorization) {
			return res.status(401).json({
				error: 'UNAUTHORIZED',
			});
		}

		const sessionToken = req.headers.authorization.split(' ')[1]; // "Bearer token"
		const contracts = await this.getContracts.execute({sessionToken});
		return res.json(contracts);
	}
}

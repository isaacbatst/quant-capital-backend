import {type Request, type Response} from 'express';
import {type GetContract} from '../../app/usecases/GetContract';
import {HeadersHelper} from '../util/HeadersHelper';

export class GetContractController {
	constructor(
		private readonly getContract: GetContract,
	) {}

	async handle(req: Request, res: Response) {
		const sessionToken = HeadersHelper.getAuthorizationHeader(req.headers);
		const contract = await this.getContract.execute({sessionToken, contractId: req.params.id});
		return res.json(contract);
	}
}

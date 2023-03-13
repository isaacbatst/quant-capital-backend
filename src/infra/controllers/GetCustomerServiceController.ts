import {type Request, type Response} from 'express';
import {type GetCustomerService} from '../../app/usecases/GetCustomerService';
import {HeadersHelper} from '../util/HeadersHelper';

export class GetCustomerServiceController {
	constructor(
		private readonly getCustomerService: GetCustomerService,
	) {}

	async handle(req: Request, res: Response) {
		const sessionToken = HeadersHelper.getSessionToken(req.headers);
		const customerService = await this.getCustomerService.execute(sessionToken);
		return res.json(customerService);
	}
}

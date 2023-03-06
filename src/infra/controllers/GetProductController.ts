import {type Request, type Response} from 'express';
import {type GetProduct} from '../../app/usecases/GetProduct';
import {HeadersHelper} from '../util/HeadersHelper';

export class GetProductController {
	constructor(
		private readonly getProduct: GetProduct,
	) {}

	async handle(req: Request, res: Response) {
		const sessionToken = HeadersHelper.getAuthorizationHeader(req.headers);
		const product = await this.getProduct.execute({productId: req.params.id, sessionToken});
		return res.json(product);
	}
}

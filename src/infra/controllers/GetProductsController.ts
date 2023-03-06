import {type Request, type Response} from 'express';
import {type GetProducts} from '../../app/usecases/GetProducts';
import {HeadersHelper} from '../util/HeadersHelper';

export class GetProductsController {
	constructor(
		private readonly getProduct: GetProducts,
	) {}

	async handle(req: Request, res: Response) {
		const sessionToken = HeadersHelper.getAuthorizationHeader(req.headers);
		const products = await this.getProduct.execute({sessionToken});
		return res.json(products);
	}
}

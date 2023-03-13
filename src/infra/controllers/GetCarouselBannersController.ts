import {type Request, type Response} from 'express';
import {type GetCarouselBanners} from '../../app/usecases/GetCarouselBanners';
import {HeadersHelper} from '../util/HeadersHelper';

export class GetCarouselBannersController {
	constructor(
		private readonly getCarouselBanners: GetCarouselBanners,
	) {}

	async handle(req: Request, res: Response) {
		const sessionToken = HeadersHelper.getSessionToken(req.headers);
		const banners = await this.getCarouselBanners.execute(sessionToken);
		return res.json(banners);
	}
}

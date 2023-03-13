import {type Request, type Response} from 'express';
import {type GetContributionsWhatsapp} from '../../app/usecases/GetContributionsWhatsapp';
import {HeadersHelper} from '../util/HeadersHelper';

export class GetContributionsWhatsappController {
	constructor(
		private readonly getContributionsWhatsapp: GetContributionsWhatsapp,
	) {}

	async handle(req: Request, res: Response) {
		const sessionToken = HeadersHelper.getSessionToken(req.headers);
		const contributionsWhatsapp = await this.getContributionsWhatsapp.execute(sessionToken);
		return res.json({
			contributionsWhatsapp,
		});
	}
}

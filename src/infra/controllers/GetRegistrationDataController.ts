import {type Request, type Response} from 'express';
import {type GetRegistrationData} from '../../app/usecases/GetRegistrationData';
import {HeadersHelper} from '../util/HeadersHelper';

export class GetRegistrationDataController {
	constructor(
		private readonly getRegistrationData: GetRegistrationData,
	) {}

	async handle(req: Request, res: Response) {
		const sessionToken = HeadersHelper.getSessionToken(req.headers);
		const registrationData = await this.getRegistrationData.execute({sessionToken});
		return res.json(registrationData);
	}
}

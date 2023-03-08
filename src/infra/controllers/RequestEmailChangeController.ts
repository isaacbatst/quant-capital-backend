import {type Request, type Response} from 'express';
import {type RequestEmailChange} from '../../app/usecases/RequestEmailChange';
import {HeadersHelper} from '../util/HeadersHelper';

export class RequestEmailChangeController {
	constructor(
		private readonly requestEmailChange: RequestEmailChange,
	) {}

	async handle(request: Request, response: Response) {
		const sessionToken = HeadersHelper.getSessionToken(request.headers);
		await this.requestEmailChange.execute({sessionToken});
		return response.status(204).send();
	}
}

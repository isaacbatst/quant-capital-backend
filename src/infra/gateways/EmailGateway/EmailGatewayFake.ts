import {type EmailGateway} from './EmailGateway';

export class EmailGatewayFake implements EmailGateway {
	send = jest.fn();
}

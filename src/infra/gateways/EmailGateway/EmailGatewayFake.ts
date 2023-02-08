import {vi} from 'vitest';
import {type EmailGateway} from './EmailGateway';

export class EmailGatewayFake implements EmailGateway {
	send = vi.fn();
}

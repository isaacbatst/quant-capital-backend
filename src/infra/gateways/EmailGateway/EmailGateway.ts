import {type Email} from '../../../domain/entities/Email';

export type EmailGateway = {
	send(email: Email): Promise<void>;
};

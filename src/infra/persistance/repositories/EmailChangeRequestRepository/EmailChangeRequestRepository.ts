import {type EmailChangeRequest} from '../../../../domain/entities/Account/EmailChangeRequest';

export type EmailChangeRequestRepository = {
	create(request: EmailChangeRequest): Promise<void>;
	getUserOpenRequests(userId: string): Promise<EmailChangeRequest[]>;
	update(request: EmailChangeRequest): Promise<void>;
};

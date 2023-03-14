import {type EmailChangeRequest} from '../../../domain/entities/Account/EmailChangeRequest';
import {EmailChangeRequestStatus} from '../../../domain/entities/Account/EmailChangeRequestStatus';
import {type EmailChangeRequestRepository} from './EmailChangeRequestRepository';

export class EmailChangeRequestRepositoryFake implements EmailChangeRequestRepository {
	requests: EmailChangeRequest[] = [];

	update = async (updated: EmailChangeRequest) => {
		this.requests = this.requests.map(request => {
			if (request.id === updated.id) {
				return updated;
			}

			return request;
		});
	};

	create = async (request: EmailChangeRequest) => {
		this.requests.push(request);
	};

	getUserOpenRequests = async (userId: string) => this.requests
		.filter(request => request.userId === userId && request.getStatus() === EmailChangeRequestStatus.open);
}

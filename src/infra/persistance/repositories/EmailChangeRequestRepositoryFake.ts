import {vi} from 'vitest';
import {type EmailChangeRequest} from '../../../domain/entities/Account/EmailChangeRequest.';
import {EmailChangeRequestStatus} from '../../../domain/entities/Account/EmailChangeRequestStatus';
import {type EmailChangeRequestRepository} from './EmailChangeRequestRepository';

export class EmailChangeRequestRepositoryFake implements EmailChangeRequestRepository {
	requests: EmailChangeRequest[] = [];

	update = vi.fn(async (updated: EmailChangeRequest) => {
		this.requests = this.requests.map(request => {
			if (request.id === updated.id) {
				return updated;
			}

			return request;
		});
	});

	create = vi.fn(async request => {
		this.requests.push(request);
	});

	getUserOpenRequests = vi.fn(async userId => this.requests
		.filter(request => request.userId === userId && request.getStatus() === EmailChangeRequestStatus.open));
}

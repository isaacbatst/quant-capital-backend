import {type PasswordResetRequest} from '../../../domain/entities/Account/PasswordResetRequest';
import {NotFoundError} from '../../../domain/errors/NotFoundError';
import {type PasswordResetRequestRepository} from './PasswordResetRequestRepository';
import {PasswordResetRequestRepositoryFakeData} from './PasswordResetRequestRepositoryFakeData';

export class PasswordResetRequestRepositoryFake implements PasswordResetRequestRepository {
	requests: PasswordResetRequest[] = PasswordResetRequestRepositoryFakeData.requests;

	async getByToken(token: string): Promise<PasswordResetRequest | undefined> {
		return this.requests.find(request => request.token === token);
	}

	async save(request: PasswordResetRequest): Promise<void> {
		this.requests.push(request);
	}

	async update(updatedRequest: PasswordResetRequest): Promise<void> {
		const foundIndex = this.requests.findIndex(request => request.token === updatedRequest.token);

		if (foundIndex < 0) {
			throw new NotFoundError('PASSWORD_RESET_REQUEST_NOT_FOUND');
		}

		this.requests[foundIndex] = updatedRequest;
	}
}

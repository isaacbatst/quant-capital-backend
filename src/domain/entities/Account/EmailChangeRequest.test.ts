import {describe, expect, it} from 'vitest';
import {EmailChangeRequest} from './EmailChangeRequest';
import {EmailChangeRequestStatus} from './EmailChangeRequestStatus';

describe('EmailChangeRequest', () => {
	it('should create an email change request', () => {
		const emailChangeRequest = new EmailChangeRequest('request-id', 'user-id', EmailChangeRequestStatus.open);

		expect(emailChangeRequest.id).toBe('request-id');
		expect(emailChangeRequest.userId).toBe('user-id');
		expect(emailChangeRequest.getStatus()).toBe(EmailChangeRequestStatus.open);
	});
});

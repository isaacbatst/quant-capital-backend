import {describe, expect, it} from 'vitest';
import {EmailAddress} from './EmailAddress';
import {PasswordResetRequest} from './PasswordResetRequest';

describe('PasswordResetRequest', () => {
	it('should create open reset request', () => {
		const now = new Date();
		const request = new PasswordResetRequest({
			token: 'any-token',
			createdAt: now,
			emailAddress: new EmailAddress('any@email.com'),
		});

		expect(request.token).toBe('any-token');
		expect(request.createdAt).toBe(now);
		expect(request.getWasUsed()).toBe(false);
	});

	it('should use request', () => {
		const now = new Date();
		const request = new PasswordResetRequest({
			token: 'any-token',
			createdAt: now,
			emailAddress: new EmailAddress('any@email.com'),
		});

		request.use();

		expect(request.getWasUsed()).toBe(true);
	});
});

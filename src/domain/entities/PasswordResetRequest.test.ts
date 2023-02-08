import {describe, expect, it} from 'vitest';
import {EmailAddress} from './EmailAddress';
import {PasswordResetRequest} from './PasswordResetRequest';

describe('PasswordResetRequest', () => {
	it('should create open reset request', () => {
		const now = new Date();
		const resetPassword = new PasswordResetRequest({
			token: 'any-token',
			createdAt: now,
			emailAddress: new EmailAddress('any@email.com'),
		});

		expect(resetPassword.token).toBe('any-token');
		expect(resetPassword.createdAt).toBe(now);
		expect(resetPassword.getWasUsed()).toBe(false);
	});

	it('should use request', () => {
		const now = new Date();
		const resetPassword = new PasswordResetRequest({
			token: 'any-token',
			createdAt: now,
			emailAddress: new EmailAddress('any@email.com'),
		});

		resetPassword.use();

		expect(resetPassword.getWasUsed()).toBe(true);
	});
});

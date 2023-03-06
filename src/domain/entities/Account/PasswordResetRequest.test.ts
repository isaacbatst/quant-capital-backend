import {describe, expect, it} from 'vitest';
import {ConflictError} from '../../errors/ConflictError';
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

	it('should not use request if expired', () => {
		const request = new PasswordResetRequest({
			token: 'any-token',
			createdAt: new Date('2022-01-01T00:00:00.000Z'),
			emailAddress: new EmailAddress('any@email.com'),
		});

		expect(() => {
			request.use();
		}).toThrow(new ConflictError('EXPIRED_PASSWORD_RESET'));
	});
});

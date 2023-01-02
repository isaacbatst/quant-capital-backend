import {EmailAddress} from './EmailAddress';
import {PasswordResetRequest} from './PasswordResetRequest';

describe('PasswordResetRequest', () => {
	it('should create reset request', () => {
		const now = new Date();
		const resetPassword = new PasswordResetRequest('any-token', now, new EmailAddress('any@email.com'));

		expect(resetPassword.token).toBe('any-token');
		expect(resetPassword.createdAt).toBe(now);
	});
});

import {PasswordReset} from './PasswordReset';

describe('PasswordReset', () => {
	it('should create reset', () => {
		const now = new Date();
		const resetPassword = new PasswordReset('any-token', now, 'any@email.com', 'any.url');

		expect(resetPassword.token).toBe('any-token');
		expect(resetPassword.createdAt).toBe(now);
		expect(resetPassword.email.message).toBe('Botão com link any.url/forgot-password?token=any-token');
	});
});

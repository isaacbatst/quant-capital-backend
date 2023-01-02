import {EmailAddress} from './EmailAddress';
import {PasswordResetRequestEmailGenerator} from './PasswordResetRequestEmailGenerator';

describe('PasswordResetRequestEmailGenerator', () => {
	it('should generate email', () => {
		const email = PasswordResetRequestEmailGenerator.generate(
			new EmailAddress('any@email.com'),
			'any-token',
			'test.url',
		);
		expect(email.message).toBe('Botão com link test.url/forgot-password?token=any-token');
	});
});

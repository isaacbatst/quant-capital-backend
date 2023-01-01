import {EmailAddress} from './EmailAddress';

describe('Email', () => {
	it('should create valid email address', () => {
		const email = new EmailAddress('valid@email.com');

		expect(email.value).toBe('valid@email.com');
	});

	it('should not create an invalid email address', () => {
		expect(() => {
			const email = new EmailAddress('invalidemail.com');
		}).toThrow('INVALID_EMAIL');
	});

	it('should not create with an empty strign', () => {
		expect(() => {
			const email = new EmailAddress('');
		}).toThrow('INVALID_EMAIL');
	});
});

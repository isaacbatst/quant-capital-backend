import {Email} from './Email';
import {EmailAddress} from './EmailAddress';

describe('Email', () => {
	it('should create email', () => {
		const email = new Email(new EmailAddress('valid@email.com'), 'subject', 'message');
		expect(email.to).toEqual(new EmailAddress('valid@email.com'));
		expect(email.subject).toBe('subject');
		expect(email.message).toBe('message');
	});

	it('should not create email with empty subject', () => {
		expect(() => {
			const email = new Email(new EmailAddress('valid@email.com'), '', 'message');
		}).toThrow('INVALID_SUBJECT');
	});

	it('should not create email with empty message', () => {
		expect(() => {
			const email = new Email(new EmailAddress('valid@email.com'), 'subject', '');
		}).toThrow('INVALID_MESSAGE');
	});
});

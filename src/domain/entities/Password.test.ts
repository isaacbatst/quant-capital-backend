import {Password} from './Password';

describe('Password', () => {
	it('shuold create password', () => {
		const password = new Password('any-password');

		expect(password.value).toBe('any-password');
	});

	it('should not create password without 8 characters', () => {
		expect(() => {
			const password = new Password('');
		}).toThrow('INVALID_PASSWORD');
	});
});

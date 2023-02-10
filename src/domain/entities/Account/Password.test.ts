import {describe, expect, it} from 'vitest';
import {Password} from './Password';

describe('Password', () => {
	it('shuold create password', () => {
		const password = new Password('any-password', 'any-hash');

		expect(password.value).toBe('any-password');
	});

	it('should not create password without 8 characters', () => {
		expect(() => {
			const password = new Password('', 'any-hash');
		}).toThrow('INVALID_PASSWORD_VALUE');
	});

	it('should not create password with empty hash', () => {
		expect(() => {
			const password = new Password('any-password', '');
		}).toThrow('INVALID_PASSWORD_HASH');
	});
});

import {describe, expect, it} from 'vitest';
import {RepositoryFactoryFake} from '../../infra/persistance/repositories/RepositoryFactoryFake';
import {AuthService} from './AuthService';

describe('AuthService', () => {
	it('should return a account', async () => {
		const {accountRepository} = new RepositoryFactoryFake();
		const authService = new AuthService(accountRepository);
		const account = await authService.getAccountBySessionToken('session-token-25');

		expect(account.getId()).toBe('25');
	});

	it('should throw when account not found', async () => {
		const {accountRepository} = new RepositoryFactoryFake();
		const authService = new AuthService(accountRepository);
		return expect(async () => {
			await authService.getAccountBySessionToken('session-token-invalid');
		}).rejects.toThrow('ACCOUNT_NOT_FOUND');
	});
});

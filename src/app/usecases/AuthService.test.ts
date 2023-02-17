import {describe, expect, it} from 'vitest';
import {RepositoryFactoryFake} from '../../infra/persistance/repositories/RepositoryFactoryFake';
import {AuthService} from './AuthService';

const makeSut = () => {
	const repositoryFactory = new RepositoryFactoryFake();
	const authService = new AuthService(repositoryFactory.accountRepository);
	return authService;
};

describe('AuthService', () => {
	describe('getAccountBySessionToken', () => {
		it('should return a account', async () => {
			const authService = makeSut();
			const account = await authService.getAccountBySessionToken('session-token-25');
			expect(account.getId()).toBe('25');
		});

		it('should throw when account not found', async () => {
			const authService = makeSut();
			return expect(async () => {
				await authService.getAccountBySessionToken('session-token-invalid');
			}).rejects.toThrow('ACCOUNT_NOT_FOUND');
		});
	});

	describe('getAccountByEmail', () => {
		it('should return a account', async () => {
			const authService = makeSut();
			const account = await authService.getAccountByEmail('test25@email.com');
			expect(account.getId()).toBe('25');
		});

		it('should throw when account not found', async () => {
			const authService = makeSut();
			return expect(async () => {
				await authService.getAccountByEmail('testinvalid@email.com');
			}).rejects.toThrow('ACCOUNT_NOT_FOUND');
		});
	});
});

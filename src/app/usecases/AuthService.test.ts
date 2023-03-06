import {describe, expect, it} from 'vitest';
import {EmailAddress} from '../../domain/entities/Account/EmailAddress';
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
			}).rejects.toThrow('UNAUTHENTICATED');
		});
	});

	describe('getAccountByEmail', () => {
		it('should return a account', async () => {
			const authService = makeSut();
			const account = await authService.getAccountByEmail(new EmailAddress('test25@email.com'));
			expect(account.getId()).toBe('25');
		});

		it('should throw when account not found', async () => {
			const authService = makeSut();
			return expect(async () => {
				await authService.getAccountByEmail(new EmailAddress('testinvalid@email.com'));
			}).rejects.toThrow('ACCOUNT_NOT_FOUND');
		});
	});
});

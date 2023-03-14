import {describe, expect, it} from 'vitest';
import {RepositoryFactoryFake} from '../../infra/persistance/repositories/RepositoryFactory/RepositoryFactoryFake';
import {AuthService} from './AuthService';
import {GetUser} from './GetUser';

describe('GetUser', () => {
	it('should return a user', async () => {
		const repositoryFactory = new RepositoryFactoryFake('http://test.url');
		const authService = new AuthService(repositoryFactory.accountRepository);
		const getUser = new GetUser(repositoryFactory, authService);
		const user = await getUser.execute({sessionToken: 'session-token-25'});
		expect(user.id).toBe('25');
		expect(user.balance).toBe(10000);
	});

	it('should throw when user not found', async () => {
		const repositoryFactory = new RepositoryFactoryFake('http://test.url');
		const authService = new AuthService(repositoryFactory.accountRepository);
		return expect(async () => {
			await authService.getAccountBySessionToken('session-token-invalid');
		}).rejects.toThrow('UNAUTHENTICATED');
	});
});

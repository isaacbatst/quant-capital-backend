import {describe, expect, it} from 'vitest';
import {RepositoryFactoryFake} from '../../infra/persistance/repositories/RepositoryFactoryFake';
import {AuthService} from './AuthService';
import {GetTransactions} from './GetTransactions';

describe('GetTransactions', () => {
	it('should get client page 1 transactions', async () => {
		const repositoryFactory = new RepositoryFactoryFake('http://test.url');
		const authService = new AuthService(repositoryFactory.accountRepository);
		const getTransactions = new GetTransactions(repositoryFactory, authService);
		const transactions = await getTransactions.execute({
			sessionToken: 'session-token-25',
			page: 1,
		});
		expect(transactions[0].id).toEqual('289');
		expect(transactions[14].id).toEqual('303');
		expect(transactions.length).toBe(15);
	});

	it('should get client page 2 transactions', async () => {
		const repositoryFactory = new RepositoryFactoryFake('http://test.url');
		const authService = new AuthService(repositoryFactory.accountRepository);
		const getTransactions = new GetTransactions(repositoryFactory, authService);
		const transactions = await getTransactions.execute({
			sessionToken: 'session-token-25',
			page: 2,
		});

		expect(transactions[0].id).toEqual('304');
		expect(transactions[14].id).toEqual('151');
		expect(transactions.length).toBe(15);
	});
});

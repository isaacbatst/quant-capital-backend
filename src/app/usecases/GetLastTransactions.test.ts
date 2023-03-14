import {describe, expect, it} from 'vitest';
import {RepositoryFactoryFake} from '../../infra/persistance/repositories/RepositoryFactory/RepositoryFactoryFake';
import {AuthService} from './AuthService';
import {GetLastTransactions} from './GetLastTransactions';

describe('GetLastTransactions', () => {
	it('should get client last transactions', async () => {
		const repositoryFactory = new RepositoryFactoryFake('http://test.url');
		const authService = new AuthService(repositoryFactory.accountRepository);
		const getTransactions = new GetLastTransactions(repositoryFactory, authService);
		const transactions = await getTransactions.execute({
			sessionToken: 'session-token-25',
		});
		expect(transactions[0].id).toEqual('289');
		expect(transactions[5].id).toEqual('294');
		expect(transactions.length).toBe(6);
	});
});

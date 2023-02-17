import {describe, expect, it} from 'vitest';
import {AuthError} from '../../domain/errors/AuthError';
import {RepositoryFactoryFake} from '../../infra/persistance/repositories/RepositoryFactoryFake';
import {AuthService} from './AuthService';
import {GetContracts} from './GetContracts';

const makeSut = () => {
	const repositoryFactory = new RepositoryFactoryFake();
	const authService = new AuthService(repositoryFactory.accountRepository);
	const getContracts = new GetContracts(repositoryFactory, authService);
	return getContracts;
};

describe('GetContracts', () => {
	it('should get user contracts', async () => {
		const getContracts = makeSut();
		const contracts = await getContracts.execute({sessionToken: 'session-token-25'});
		expect(contracts).toHaveLength(1);
		expect(contracts[0].id).toEqual('11');
		expect(contracts[0].date).toEqual('2020-10-09T00:00:00.000Z');
		expect(contracts[0].balance).toEqual(0);
		expect(contracts[0].clientId).toEqual('25');
	});

	it('should not get contract if user is not found', async () => {
		const getContracts = makeSut();
		return expect(async () =>
			getContracts.execute({sessionToken: 'invalid-token'}))
			.rejects.toThrow(new AuthError('ACCOUNT_NOT_FOUND'));
	});
});

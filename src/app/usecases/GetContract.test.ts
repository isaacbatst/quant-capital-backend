import {describe, expect, it} from 'vitest';
import {NotFoundError} from '../../domain/errors/NotFoundError';
import {RepositoryFactoryFake} from '../../infra/persistance/repositories/RepositoryFactoryFake';
import {GetContract} from './GetContract';

describe('GetContract', () => {
	it('should get user contract', async () => {
		const repositoryFactory = new RepositoryFactoryFake();
		const getContract = new GetContract(repositoryFactory);
		const contract = await getContract.execute({sessionToken: 'session-token-25', contractId: '11'});
		expect(contract.id).toBe('11');
		expect(contract.contractDate).toBe('2020-10-09T00:00:00.000Z');
		expect(contract.balance).toBe(0);
		expect(contract.clientId).toBe('25');
		expect(contract.lastVersion.id).toBe('193');
	});

	it('should not get contract from other user', async () => {
		const repositoryFactory = new RepositoryFactoryFake();
		const getContract = new GetContract(repositoryFactory);

		return expect(async () =>
			getContract.execute({sessionToken: 'session-token-25', contractId: '75'}))
			.rejects.toThrow(new NotFoundError('CONTRACT_NOT_FOUND'));
	});

	it('should throw error if contract not found', async () => {
		const repositoryFactory = new RepositoryFactoryFake();
		const getContract = new GetContract(repositoryFactory);

		return expect(async () =>
			getContract.execute({sessionToken: 'session-token-25', contractId: '76'}))
			.rejects.toThrow(new NotFoundError('CONTRACT_NOT_FOUND'));
	});
});

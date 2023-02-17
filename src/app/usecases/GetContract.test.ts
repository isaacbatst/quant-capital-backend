import {describe, expect, it} from 'vitest';
import {NotFoundError} from '../../domain/errors/NotFoundError';
import {RepositoryFactoryFake} from '../../infra/persistance/repositories/RepositoryFactoryFake';
import {AuthService} from './AuthService';
import {GetContract} from './GetContract';

const makeSut = () => {
	const repositoryFactory = new RepositoryFactoryFake();
	const authService = new AuthService(repositoryFactory.accountRepository);
	const getContract = new GetContract(repositoryFactory, authService);
	return getContract;
};

describe('GetContract', () => {
	it('should get user contract', async () => {
		const getContract = makeSut();
		const contract = await getContract.execute({sessionToken: 'session-token-25', contractId: '11'});
		expect(contract.id).toBe('11');
		expect(contract.contractDate).toBe('2020-10-09T00:00:00.000Z');
		expect(contract.balance).toBe(0);
		expect(contract.clientId).toBe('25');
		expect(contract.lastVersion.id).toBe('193');
	});

	it('should not get contract from other user', async () => {
		const getContract = makeSut();
		return expect(async () =>
			getContract.execute({sessionToken: 'session-token-25', contractId: '75'}))
			.rejects.toThrow(new NotFoundError('CONTRACT_NOT_FOUND'));
	});

	it('should throw error if contract not found', async () => {
		const getContract = makeSut();
		return expect(async () =>
			getContract.execute({sessionToken: 'session-token-25', contractId: '76'}))
			.rejects.toThrow(new NotFoundError('CONTRACT_NOT_FOUND'));
	});
});

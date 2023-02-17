import {describe, expect, it} from 'vitest';
import {RepositoryFactoryFake} from '../../infra/persistance/repositories/RepositoryFactoryFake';
import {IdGeneratorFake} from '../../infra/util/IdGenerator/IdGeneratorFake';
import {AuthService} from './AuthService';
import {RequestContractWithdraw} from './RequestContractWithdraw';

const makeSut = () => {
	const repositoryFactory = new RepositoryFactoryFake();
	const idGenerator = new IdGeneratorFake();
	const authService = new AuthService(repositoryFactory.accountRepository);
	const requestContractWithdraw = new RequestContractWithdraw(repositoryFactory, idGenerator, authService);
	return {
		requestContractWithdraw,
		repositoryFactory,
		idGenerator,
	};
};

describe('RequestContractWithdraw', () => {
	it('should save a contract withdraw request', async () => {
		const input = {
			contractId: '112',
			value: 100,
			numericPassword: '120943',
			sessionToken: 'session-token-62',
		};
		const {idGenerator, requestContractWithdraw, repositoryFactory: {contractWithdrawRequestRepository}} = makeSut();
		await requestContractWithdraw.execute(input);
		const request = await contractWithdrawRequestRepository.getById(idGenerator.generatedId);
		expect(request).toBeDefined();
	});

	it('should not save a contract withdraw request with a value bigger than available balance', async () => {
		const input = {
			contractId: '112',
			value: 30000,
			numericPassword: '120943',
			sessionToken: 'session-token-62',
		};
		const {requestContractWithdraw} = makeSut();
		await expect(async () => {
			await requestContractWithdraw.execute(input);
		}).rejects.toThrow('INSUFFICIENT_BALANCE');
	});
});

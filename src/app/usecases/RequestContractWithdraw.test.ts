import {describe, expect, it} from 'vitest';
import {RepositoryFactoryFake} from '../../infra/persistance/repositories/RepositoryFactory/RepositoryFactoryFake';
import {EncrypterFake} from '../../infra/util/Encrypter/EncrypterFake';
import {IdGeneratorFake} from '../../infra/util/IdGenerator/IdGeneratorFake';
import {AuthService} from './AuthService';
import {RequestContractWithdraw} from './RequestContractWithdraw';

const makeSut = () => {
	const repositoryFactory = new RepositoryFactoryFake('http://test.url');
	const idGenerator = new IdGeneratorFake();
	const authService = new AuthService(repositoryFactory.accountRepository);
	const encrypter = new EncrypterFake();
	const requestContractWithdraw = new RequestContractWithdraw(repositoryFactory, idGenerator, authService, encrypter);
	return {
		requestContractWithdraw,
		repositoryFactory,
		idGenerator,
		encrypter,
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

	it('should not save a contract withdraw request with invalid password', async () => {
		const input = {
			contractId: '112',
			value: 100,
			numericPassword: 'invalid',
			sessionToken: 'session-token-62',
		};
		const {requestContractWithdraw, encrypter} = makeSut();
		encrypter.isTheSame = false;
		await expect(async () => {
			await requestContractWithdraw.execute(input);
		}).rejects.toThrow('INVALID_PASSWORD');
	});
});

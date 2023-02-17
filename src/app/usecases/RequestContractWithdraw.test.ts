import {describe, expect, it} from 'vitest';
import {Account} from '../../domain/entities/Account/Account';
import {EmailAddress} from '../../domain/entities/Account/EmailAddress';
import {RepositoryFactoryFake} from '../../infra/persistance/repositories/RepositoryFactoryFake';
import {IdGeneratorFake} from '../../infra/util/IdGenerator/IdGeneratorFake';
import {RequestContractWithdraw} from './RequestContractWithdraw';

describe('RequestContractWithdraw', () => {
	it('should save a contract withdraw request', async () => {
		const input = {
			contractId: '112',
			value: 100,
			numericPassword: '120943',
			sessionToken: 'session-token-62',
		};
		const repositoryFactory = new RepositoryFactoryFake();
		const idGenerator = new IdGeneratorFake();
		idGenerator.generatedId = 'request-id';
		const requestContractWithdraw = new RequestContractWithdraw(repositoryFactory, idGenerator);
		const {contractWithdrawRequestRepository} = repositoryFactory;
		await requestContractWithdraw.execute(input);
		const request = await contractWithdrawRequestRepository.getById('request-id');
		expect(request).toBeDefined();
	});

	it('should not save a contract withdraw request with a value bigger than available balance', async () => {
		const input = {
			contractId: '112',
			value: 30000,
			numericPassword: '120943',
			sessionToken: 'session-token-62',
		};
		const repositoryFactory = new RepositoryFactoryFake();
		const idGenerator = new IdGeneratorFake();
		const requestContractWithdraw = new RequestContractWithdraw(repositoryFactory, idGenerator);
		await expect(async () => {
			await requestContractWithdraw.execute(input);
		}).rejects.toThrow('INSUFFICIENT_BALANCE');
	});
});

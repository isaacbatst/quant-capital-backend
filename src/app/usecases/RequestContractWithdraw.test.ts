import {describe, expect, it} from 'vitest';
import {Account} from '../../domain/entities/Account/Account';
import {EmailAddress} from '../../domain/entities/Account/EmailAddress';
import {RepositoryFactoryFake} from '../../infra/persistance/repositories/RepositoryFactoryFake';
import {IdGeneratorFake} from '../../infra/util/IdGenerator/IdGeneratorFake';
import {RequestContractWithdraw} from './RequestContractWithdraw';

describe('RequestContractWithdraw', () => {
	it('should save a contract withdraw request', async () => {
		const input = {
			contractId: 'contractId',
			value: 100,
			password: '120943',
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

	it('should not save a contract withdraw request with a value bigger than available', async () => {
		const input = {
			contractId: 'contractId',
			value: 100,
			password: '120943',
		};
		const repositoryFactory = new RepositoryFactoryFake();
		await repositoryFactory.accountRepository.save(
			new Account('account-id', new EmailAddress('any@email.com'), 'account-password'),
		);
		const idGenerator = new IdGeneratorFake();
		const requestContractWithdraw = new RequestContractWithdraw(repositoryFactory, idGenerator);
		await expect(async () => {
			await requestContractWithdraw.execute(input);
		}).rejects.toThrow('INVALID_VALUE');
	});
});

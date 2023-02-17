import {describe, expect, it} from 'vitest';
import {RepositoryFactoryFake} from '../../infra/persistance/repositories/RepositoryFactoryFake';
import {GetContracts} from './GetContracts';

describe('GetContracts', () => {
	it('should get user contracts', async () => {
		const repositoryFactory = new RepositoryFactoryFake();
		const getContracts = new GetContracts(repositoryFactory);
		const contracts = await getContracts.execute({sessionToken: 'session-token'});
		expect(contracts).toHaveLength(1);
		expect(contracts[0].id).toEqual('11');
	});
});

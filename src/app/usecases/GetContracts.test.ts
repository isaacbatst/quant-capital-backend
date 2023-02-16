import {describe, it} from 'vitest';
import { RepositoryFactoryFake } from '../../infra/persistance/repositories/RepositoryFactoryFake';

describe('GetContracts', () => {
	it('should get user contracts', async () => {
    const repositoryFactory = new RepositoryFactoryFake();
    repositoryFactory.contractRepository
    const getContracts = new GetContracts(repositoryFactory);
    const contracts = await getContracts.execute();
    expect(contracts).toBeInstanceOf(Array);
	});
});

import {describe, expect, it} from 'vitest';
import {RepositoryFactoryFake} from '../../infra/persistance/repositories/RepositoryFactory/RepositoryFactoryFake';
import {AuthService} from './AuthService';
import {GetProduct} from './GetProduct';

describe('GetProduct', () => {
	it('should return product', async () => {
		const repositoryFactory = new RepositoryFactoryFake('http://test.url');
		const authService = new AuthService(repositoryFactory.accountRepository);
		const getProducts = new GetProduct(repositoryFactory.productRepository, authService);
		const product = await getProducts.execute({sessionToken: 'session-token-25', productId: 'product-id-1'});
		expect(product.id).toEqual(repositoryFactory.productRepository.products[0].getId());
	});
});

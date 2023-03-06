import {describe, expect, it} from 'vitest';
import {AuthError} from '../../domain/errors/AuthError';
import {RepositoryFactoryFake} from '../../infra/persistance/repositories/RepositoryFactoryFake';
import {AuthService} from './AuthService';
import {GetProducts} from './GetProducts';

describe('GetProducts', () => {
	it('should return products', async () => {
		const repository = new RepositoryFactoryFake();
		const authService = new AuthService(repository.accountRepository);
		const getProducts = new GetProducts(repository, authService);
		const products = await getProducts.execute({sessionToken: 'session-token-25'});
		expect(products[0].id).toEqual(repository.productRepository.products[0].getId());
		expect(products[1].id).toEqual(repository.productRepository.products[1].getId());
	});

	it('should not return if user is not logged in', async () => {
		const repository = new RepositoryFactoryFake();
		const authService = new AuthService(repository.accountRepository);
		const getProducts = new GetProducts(repository, authService);

		return expect(async () => {
			await getProducts.execute({sessionToken: 'session-token-invalid'});
		}).rejects.toThrow(new AuthError('UNAUTHENTICATED'));
	});
});

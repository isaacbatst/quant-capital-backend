import {describe, expect, it} from 'vitest';
import {AuthError} from '../../domain/errors/AuthError';
import {RepositoryFactoryFake} from '../../infra/persistance/repositories/RepositoryFactoryFake';
import {EncrypterFake} from '../../infra/util/Encrypter/EncrypterFake';
import {AuthService} from './AuthService';
import {GetProducts} from './GetProducts';

describe('GetProducts', () => {
	it('should return products', async () => {
		const repository = new RepositoryFactoryFake();
		const encrypter = new EncrypterFake();
		const authService = new AuthService(repository.accountRepository);
		const getProducts = new GetProducts(repository, encrypter, authService);
		const products = await getProducts.execute({sessionToken: 'session-token-25'});
		expect(products).toEqual(repository.productRepository.productBriefs);
	});

	it('should not return if user is not logged in', async () => {
		const repository = new RepositoryFactoryFake();
		const encrypter = new EncrypterFake();
		const authService = new AuthService(repository.accountRepository);
		const getProducts = new GetProducts(repository, encrypter, authService);

		return expect(async () => {
			await getProducts.execute({sessionToken: 'session-token-invalid'});
		}).rejects.toThrow(new AuthError('ACCOUNT_NOT_FOUND'));
	});
});

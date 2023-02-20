import {type ProductRepository} from '../../infra/persistance/repositories/ProductRepository';
import {type RepositoryFactory} from '../../infra/persistance/repositories/RepositoryFactory';
import {type EncrypterFake} from '../../infra/util/Encrypter/EncrypterFake';
import {type AuthService} from './AuthService';

type Output = {
	id: string;
	name: string;
	shortDescription: string;
	imageSrc: string;
};

type Input = {
	sessionToken: string;
};

export class GetProducts {
	private readonly productRepository: ProductRepository;

	constructor(
		repository: RepositoryFactory,
		private readonly encrypter: EncrypterFake,
		private readonly authService: AuthService,
	) {
		this.productRepository = repository.productRepository;
	}

	async execute(input: Input): Promise<Output[]> {
		await this.authService.getAccountBySessionToken(input.sessionToken);

		const products = await this.productRepository.getAll();
		return products.map(product => ({
			id: product.getId(),
			name: product.getName(),
			shortDescription: product.getShortDescription(),
			imageSrc: product.getImageSrc(),
		}));
	}
}

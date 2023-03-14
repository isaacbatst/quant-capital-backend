import {type ProductRepository} from '../../infra/persistance/repositories/ProductRepository/ProductRepository';
import {type RepositoryFactory} from '../../infra/persistance/repositories/RepositoryFactory';
import {type AuthService} from './AuthService';

type Output = {
	id: string;
	name: string;
	shortDescription: string;
	imageSrc: string;
	order: number;
};

type Input = {
	sessionToken: string;
};

export class GetProducts {
	private readonly productRepository: ProductRepository;

	constructor(
		repository: RepositoryFactory,
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
			order: product.getOrder(),
		}));
	}
}

import {NotFoundError} from '../../domain/errors/NotFoundError';
import {type ProductRepository} from '../../infra/persistance/repositories/ProductRepository/ProductRepository';
import {type AuthService} from './AuthService';

type Input = {
	sessionToken: string;
	productId: string;
};

type Output = {
	id: string;
	name: string;
	shortDescription: string;
	imageSrc: string;
	description: string;
	tel: string;
	whatsapp: string;
	email: string;
	order: number;
};

export class GetProduct {
	constructor(
		private readonly productRepository: ProductRepository,
		private readonly authService: AuthService,
	) {}

	async execute(input: Input): Promise<Output> {
		await this.authService.getAccountBySessionToken(input.sessionToken);
		const product = await this.productRepository.getById(input.productId);

		if (!product) {
			throw new NotFoundError('PRODUCT_NOT_FOUND');
		}

		const productContact = product.getContact();
		return {
			id: product.getId(),
			name: product.getName(),
			shortDescription: product.getShortDescription(),
			imageSrc: product.getImageSrc(),
			description: product.getDescription(),
			tel: productContact.getTel(),
			whatsapp: productContact.getWhatsapp(),
			order: product.getOrder(),
			email: productContact.getEmail().value,
		};
	}
}

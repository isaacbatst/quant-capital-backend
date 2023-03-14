import {type Product as PrismaProduct, type PrismaClient} from '../../../../../prisma/generated/appClient';
import {EmailAddress} from '../../../../domain/entities/Account/EmailAddress';
import {Product} from '../../../../domain/entities/Product/Product';
import {ProductContact} from '../../../../domain/entities/Product/ProductContact';
import {type ProductRepository} from './ProductRepository';

export class ProductRepositoryPrisma implements ProductRepository {
	private static toDomain(product: PrismaProduct): Product {
		return new Product({
			id: product.id,
			name: product.name,
			shortDescription: product.shortDescription,
			imageSrc: product.imageSrc,
			description: product.description,
			order: product.order,
			contact: new ProductContact({
				email: new EmailAddress(product.email),
				tel: product.tel,
				whatsapp: product.whatsapp,
			}),
		});
	}

	constructor(
		private readonly appUrl: PrismaClient,
	) {}

	async getAll(): Promise<Product[]> {
		const products = await this.appUrl.product.findMany();
		return products.map(ProductRepositoryPrisma.toDomain);
	}

	async getById(id: string): Promise<Product | undefined> {
		const product = await this.appUrl.product.findUnique({
			where: {
				id,
			},
		});

		if (!product) {
			return undefined;
		}

		return ProductRepositoryPrisma.toDomain(product);
	}
}

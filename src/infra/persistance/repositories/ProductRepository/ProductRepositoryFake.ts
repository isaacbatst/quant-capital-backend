import {EmailAddress} from '../../../../domain/entities/Account/EmailAddress';
import {Product} from '../../../../domain/entities/Product/Product';
import {ProductContact} from '../../../../domain/entities/Product/ProductContact';
import {type ProductRepository} from './ProductRepository';

export class ProductRepositoryFake implements ProductRepository {
	products: Product[] = [
		new Product({
			id: 'product-id-1',
			name: 'product-name-1',
			shortDescription: 'product-description-1',
			imageSrc: `${this.appUrl}/banner_1.jpg`,
			description: 'product-description-1',
			order: 2,
			contact: new ProductContact({
				email: new EmailAddress('product-contact-email-1@email.com'),
				tel: 'product-contact-tel-1',
				whatsapp: 'product-contact-whatsapp-1',
			}),
		}),
		new Product({
			id: 'product-id-2',
			name: 'product-name-2',
			shortDescription: 'product-description-2',
			imageSrc: `${this.appUrl}/banner_1.jpg`,
			description: 'product-description-2',
			order: 1,
			contact: new ProductContact({
				email: new EmailAddress('product-contact-email-2@email.com'),
				tel: 'product-contact-tel-2',
				whatsapp: 'product-contact-whatsapp-2',
			}),
		}),
	];

	constructor(
		private readonly appUrl: string,
	) {}

	async getAll(): Promise<Product[]> {
		return this.products;
	}

	async getById(id: string): Promise<Product | undefined> {
		return this.products.find(product => product.getId() === id);
	}
}

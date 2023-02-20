import {ProductBrief} from '../../../domain/entities/Product/ProductBrief';
import {type ProductRepository} from './ProductRepository';

export class ProductRepositoryFake implements ProductRepository {
	productBriefs: ProductBrief[] = [
		new ProductBrief({
			id: 'product-id-1',
			name: 'product-name-1',
			shortDescription: 'product-description-1',
			imageSrc: 'product-image-src-1',
		}),
		new ProductBrief({
			id: 'product-id-2',
			name: 'product-name-2',
			shortDescription: 'product-description-2',
			imageSrc: 'product-image-src-2',
		}),
	];

	async getAll(): Promise<ProductBrief[]> {
		return this.productBriefs;
	}
}

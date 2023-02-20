import {type ProductBrief} from '../../../domain/entities/Product/ProductBrief';

export type ProductRepository = {
	getAll: () => Promise<ProductBrief[]>;
};

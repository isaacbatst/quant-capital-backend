import {type Product} from '../../../../domain/entities/Product/Product';

export type ProductRepository = {
	getAll: () => Promise<Product[]>;
	getById: (id: string) => Promise<Product | undefined>;
};

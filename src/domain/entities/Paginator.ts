import {ValidationError} from '../errors/ValidationError';

export class Paginator {
	static getPage<T>(array: T[], page: number, pageSize: number): T[] {
		if (page < 1) {
			throw new ValidationError('INVALID_PAGE');
		}

		const startIndex = (page - 1) * pageSize;
		return array.slice(startIndex, startIndex + pageSize);
	}
}

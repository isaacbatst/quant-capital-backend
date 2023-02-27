export class Paginator {
	static getPage<T>(array: T[], page: number, pageSize: number): T[] {
		const startIndex = (page - 1) * pageSize;
		return array.slice(startIndex, startIndex + pageSize);
	}
}

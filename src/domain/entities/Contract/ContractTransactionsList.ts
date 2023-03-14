import {type SortType} from '../SortType';
import {type ContractTransaction} from './ContractTransaction';

export class ContractTransactionsList {
	constructor(
		private readonly transactions: ContractTransaction[] = [],
	) {}

	addTransaction(transaction: ContractTransaction): void {
		this.transactions.push(transaction);
	}

	getTransactionsSortedByDate(sortType: SortType = 'desc') {
		return this.transactions.slice().sort((a, b) => {
			const timeA = this.getTimeWithFallback(a.getDate());
			const timeB = this.getTimeWithFallback(b.getDate());

			if (sortType === 'asc') {
				return timeA - timeB;
			}

			return timeB - timeA;
		});
	}

	private getTimeWithFallback(date: Date | undefined): number {
		if (date) {
			return date.getTime();
		}

		return 0;
	}
}

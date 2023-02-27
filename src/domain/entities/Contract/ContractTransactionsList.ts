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
			if (sortType === 'asc') {
				return a.getDate().getTime() - b.getDate().getTime();
			}

			return b.getDate().getTime() - a.getDate().getTime();
		});
	}
}

import {type Contract} from './Contract';
import {ContractTransactionsList} from './ContractTransactionsList';

export class ContractsList {
	constructor(
		private readonly contracts: Contract[] = [],
	) {}

	addContract(contract: Contract): void {
		this.contracts.push(contract);
	}

	getTransactions(): ContractTransactionsList {
		const transactions = new ContractTransactionsList();

		this.contracts.forEach(contract => {
			const contractTransactions = contract.getLastVersion().getTransactions();
			transactions.addTransaction(contractTransactions.initial);

			contractTransactions.others.forEach(transaction => {
				transactions.addTransaction(transaction);
			});
		});

		return transactions;
	}
}

import {type ContractRate} from './ContractRate';
import {type ContractTransaction} from './ContractTransaction';
import {type ContractTransactionInitial} from './ContractTransactionInitial';
import {ContractTransactionsList} from './ContractTransactionsList';

export type ContractVersionType = 'contract' | 'additive';

export type ContractVersionTransactions = {
	initial: ContractTransactionInitial;
	others: ContractTransaction[];
};

export type ContractVersionParams = {
	id: string;
	startDate?: Date;
	dueDate?: Date;
	type: ContractVersionType;
	rate: ContractRate;
	initialTransaction: ContractTransaction;
	otherTransactions?: ContractTransaction[];
	balance: number;
};

export class ContractVersion {
	private readonly id: string;
	private readonly balance: number;
	private readonly startDate?: Date;
	private readonly dueDate?: Date;
	private readonly type: ContractVersionType;
	private readonly rate: ContractRate;
	private readonly transactions: ContractVersionTransactions;

	constructor(
		params: ContractVersionParams,
	) {
		this.id = params.id;
		this.startDate = params.startDate;
		this.dueDate = params.dueDate;
		this.type = params.type;
		this.rate = params.rate;
		this.balance = params.balance;
		this.transactions = {
			initial: params.initialTransaction,
			others: params.otherTransactions ?? [],
		};
	}

	addTransaction(transaction: ContractTransaction) {
		this.transactions.others.push(transaction);
	}

	getId(): string {
		return this.id;
	}

	getStartDate(): Date | undefined {
		return this.startDate;
	}

	getDueDate(): Date | undefined {
		return this.dueDate;
	}

	getType(): ContractVersionType {
		return this.type;
	}

	getRate(): ContractRate {
		return this.rate;
	}

	getBalance(): number {
		return this.balance;
	}

	getTransactions(): ContractVersionTransactions {
		return this.transactions;
	}

	getOrderedTransactions(): ContractTransaction[] {
		const list = new ContractTransactionsList([
			this.transactions.initial,
			...this.transactions.others,
		]);

		return list.getTransactionsSortedByDate('desc');
	}
}

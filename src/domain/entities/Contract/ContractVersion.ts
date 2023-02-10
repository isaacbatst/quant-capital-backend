import {type ContractRate} from './ContractRate';
import {type ContractTransaction} from './ContractTransaction';
import {type ContractTransactionInitial} from './ContractTransactionInitial';

export type ContractVersionType = 'contract' | 'additive';

export type ContractVersionTransactions = {
	initial: ContractTransactionInitial;
	others: ContractTransaction[];
};

export type ContractVersionParams = {
	id: string;
	date: Date;
	dueDate: Date;
	type: ContractVersionType;
	rate: ContractRate;
	initialTransaction: ContractTransaction;
	balance: number;
};

export class ContractVersion {
	private readonly id: string;
	private readonly balance: number;
	private readonly date: Date;
	private readonly dueDate: Date;
	private readonly type: ContractVersionType;
	private readonly rate: ContractRate;
	private readonly transactions: ContractVersionTransactions;

	constructor(
		params: ContractVersionParams,
	) {
		this.id = params.id;
		this.date = params.date;
		this.dueDate = params.dueDate;
		this.type = params.type;
		this.rate = params.rate;
		this.balance = params.balance;
		this.transactions = {
			initial: params.initialTransaction,
			others: [],
		};
	}

	addTransaction(transaction: ContractTransaction) {
		this.transactions.others.push(transaction);
	}

	getId(): string {
		return this.id;
	}

	getDate(): Date {
		return this.date;
	}

	getDueDate(): Date {
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
}

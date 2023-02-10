export type ContractTransactionType = 'contribution' | 'withdraw' | 'yield' | 'initial';

export type ContractTransactionParams = {
	id: string;
	date: Date;
	value: number;
	type: ContractTransactionType;
};

export class ContractTransaction {
	private readonly id: string;
	private readonly date: Date;
	private readonly value: number;
	private readonly type: ContractTransactionType;

	constructor(params: ContractTransactionParams) {
		this.id = params.id;
		this.date = params.date;
		this.value = params.value;
		this.type = params.type;
	}

	getId(): string {
		return this.id;
	}

	getDate(): Date {
		return this.date;
	}

	getValue(): number {
		return this.value;
	}

	getType(): ContractTransactionType {
		return this.type;
	}
}

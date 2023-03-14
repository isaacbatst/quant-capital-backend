type ContractBriefParams = {
	id: string;
	date?: Date;
	balance: number;
	clientId: string;
};

export class ContractBrief {
	private readonly id: string;
	private readonly clientId: string;
	private readonly date?: Date;
	private readonly balance: number;

	constructor({id, date, balance, clientId}: ContractBriefParams) {
		this.id = id;
		this.date = date;
		this.balance = balance;
		this.clientId = clientId;
	}

	getId(): string {
		return this.id;
	}

	getDate(): Date | undefined {
		return this.date;
	}

	getBalance(): number {
		return this.balance;
	}

	getClientId(): string {
		return this.clientId;
	}
}

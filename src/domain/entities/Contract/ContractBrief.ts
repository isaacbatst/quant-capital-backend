type ContractBriefParams = {
	id: string;
	date: Date;
	value: number;
};

export class ContractBrief {
	private readonly id: string;
	private readonly date: Date;
	private readonly value: number;

	constructor({id, date, value}: ContractBriefParams) {
		this.id = id;
		this.date = date;
		this.value = value;
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
}

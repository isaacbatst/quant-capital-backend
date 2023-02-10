import {type ContractVersion} from './ContractVersion';

export type ContractVersions = {
	initial: ContractVersion;
	additives: ContractVersion[];
};

type ContractParams = {
	id: string;
	date: Date;
	clientId: string;
	balance: number;
	initialVersion: ContractVersion;
};

export class Contract {
	private readonly id: string;
	private readonly date: Date;
	private readonly userId: string;
	private readonly balance: number;
	private readonly versions: ContractVersions;

	constructor(params: ContractParams) {
		this.id = params.id;
		this.date = params.date;
		this.userId = params.clientId;
		this.balance = params.balance;
		this.versions = {
			initial: params.initialVersion,
			additives: [],
		};
	}

	addVersion(version: ContractVersion) {
		this.versions.additives.push(version);
	}

	getId(): string {
		return this.id;
	}

	getDate(): Date {
		return this.date;
	}

	getUserId(): string {
		return this.userId;
	}

	getBalance(): number {
		return this.balance;
	}

	getVersions(): ContractVersions {
		return this.versions;
	}
}

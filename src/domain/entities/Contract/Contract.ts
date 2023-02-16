import {type ContractRate} from './ContractRate';
import {type ContractTransaction} from './ContractTransaction';
import {ContractTransactionInitial} from './ContractTransactionInitial';
import {ContractVersion, type ContractVersionType} from './ContractVersion';
import {ContractVersionAdditive, type ContractVersionAdditiveParams} from './ContractVersionAdditive';

export type ContractVersions = {
	initial: ContractVersion;
	additives: ContractVersion[];
};

type ContractParams = {
	id: string;
	contractDate: Date;
	clientId: string;
	balance: number;
	initialVersion: {
		startDate: Date;
		dueDate: Date;
		type: ContractVersionType;
		rate: ContractRate;
		balance: number;
		initialTransactionValue: number;
		otherTransactions?: ContractTransaction[];
	};
	additives?: Array<Omit<ContractVersionAdditiveParams, 'initialTransaction'>>;
};

export class Contract {
	private readonly id: string;
	private readonly contractDate: Date;
	private readonly userId: string;
	private readonly balance: number;
	private readonly versions: ContractVersions;

	constructor(params: ContractParams) {
		this.id = params.id;
		this.contractDate = params.contractDate;
		this.userId = params.clientId;
		this.balance = params.balance;
		this.versions = {
			initial: new ContractVersion({
				id: this.id,
				balance: params.initialVersion.balance,
				dueDate: params.initialVersion.dueDate,
				startDate: params.initialVersion.startDate,
				type: params.initialVersion.type,
				rate: params.initialVersion.rate,
				initialTransaction: new ContractTransactionInitial({
					date: params.initialVersion.startDate,
					value: params.initialVersion.initialTransactionValue,
					id: this.id,
				}),
				otherTransactions: params.initialVersion.otherTransactions,
			}),
			additives: [],
		};

		params.additives?.forEach(additive => {
			this.addAdditive(additive);
		});
	}

	addAdditive(params: Omit<ContractVersionAdditiveParams, 'initialTransaction'>): ContractVersionAdditive {
		const lastVersion = this.getLastVersion();

		const additive = new ContractVersionAdditive({
			...params,
			otherTransactions: [
				...lastVersion.getTransactions().others,
				...(params.otherTransactions ?? []),
			],
			initialTransaction: this.versions.initial.getTransactions().initial,
		});
		this.versions.additives.push(additive);
		return additive;
	}

	getId(): string {
		return this.id;
	}

	getDate(): Date {
		return this.contractDate;
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

	getLastVersion(): ContractVersion {
		return 	this.versions.additives.length > 0
			? this.versions.additives[this.versions.additives.length - 1]
			: this.versions.initial;
	}
}

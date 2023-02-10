export type ContractRateType = 'perYear' | 'perMonth';
export class ContractRate {
	constructor(
		readonly value: number,
		readonly type: ContractRateType,
	) {
	}
}

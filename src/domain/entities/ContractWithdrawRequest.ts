export class ContractWithdrawRequest {
	constructor(
		readonly contractId: string,
		readonly value: number,
	) {}
}

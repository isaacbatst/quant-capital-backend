import {ContractTransaction, type ContractTransactionParams} from './ContractTransaction';

export class ContractTransactionInitial extends ContractTransaction {
	constructor(params: Omit<ContractTransactionParams, 'type'>) {
		super({
			...params,
			type: 'initial',
		});
	}
}

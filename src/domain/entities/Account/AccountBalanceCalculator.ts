import {type ContractBrief} from '../Contract/ContractBrief';

export class AccountBalanceCalculator {
	static calculate(contracts: ContractBrief[]): number {
		return contracts.reduce((sum, contract) => sum + contract.getBalance(), 0);
	}
}

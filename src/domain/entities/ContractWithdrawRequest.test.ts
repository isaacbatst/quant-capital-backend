import {describe, expect, it} from 'vitest';
import {ContractWithdrawRequest} from './ContractWithdrawRequest';

describe('ContractWithdrawRequest', () => {
	it('should create a ContractWithdrawRequest', () => {
		const contractId = 'contractId';
		const value = 100;
		const contractWithdrawRequest = new ContractWithdrawRequest(contractId, value);
		expect(contractWithdrawRequest.contractId).toBe(contractId);
		expect(contractWithdrawRequest.value).toBe(value);
	});
});

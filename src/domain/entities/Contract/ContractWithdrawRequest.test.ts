import {describe, expect, it} from 'vitest';
import {ContractWithdrawRequest} from './ContractWithdrawRequest';

describe('ContractWithdrawRequest', () => {
	it('should create a ContractWithdrawRequest', () => {
		const contractId = 'contractId';
		const value = 100;
		const id = 'any-id';
		const contractWithdrawRequest = new ContractWithdrawRequest({
			id,
			contractId,
			value,
		});
		expect(contractWithdrawRequest.id).toBe(id);
		expect(contractWithdrawRequest.contractId).toBe(contractId);
		expect(contractWithdrawRequest.value).toBe(value);
	});
});

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
			createdAt: new Date(),
		});
		expect(contractWithdrawRequest.id).toBe(id);
		expect(contractWithdrawRequest.contractId).toBe(contractId);
		expect(contractWithdrawRequest.value).toBe(value);
	});

	it('should not create a ContractWithdrawRequest with 0 value', () => {
		const contractId = 'contractId';
		const value = 0;
		const id = 'any-id';

		expect(() => {
			const contractWithdrawRequest = new ContractWithdrawRequest({
				id,
				contractId,
				value,
				createdAt: new Date(),
			});
		}).toThrow('INVALID_ZERO_VALUE');
	});
});

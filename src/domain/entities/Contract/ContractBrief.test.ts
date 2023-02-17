import {describe, expect, it} from 'vitest';
import {ContractBrief} from './ContractBrief';

describe('ContractBrief', () => {
	it('should create a ContractBrief', () => {
		const date = new Date();
		const id = 'any-id';
		const value = 1000;
		const contractBrief = new ContractBrief({
			id,
			date,
			balance: value,
			clientId: 'any-client-id',
		});
		expect(contractBrief.getId()).toBe(id);
		expect(contractBrief.getBalance()).toBe(value);
		expect(contractBrief.getDate()).toBe(date);
	});
});

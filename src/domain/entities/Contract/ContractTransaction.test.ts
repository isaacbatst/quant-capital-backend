import {describe, expect, it} from 'vitest';
import {ContractTransaction} from './ContractTransaction';

describe('ContractTransaction', () => {
	it('should create a contract transaction', () => {
		const transaction = new ContractTransaction({
			id: '112',
			date: new Date('2022-08-15'),
			value: 27600,
			type: 'initial',
		});
		expect(transaction.getId()).toBe('112');
		expect(transaction.getDate()).toEqual(new Date('2022-08-15'));
		expect(transaction.getValue()).toBe(27600);
		expect(transaction.getType()).toBe('initial');
	});
});

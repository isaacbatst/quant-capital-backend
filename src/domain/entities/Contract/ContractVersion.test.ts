import {describe, expect, it} from 'vitest';
import {ContractRate} from './ContractRate';
import {ContractTransaction} from './ContractTransaction';
import {ContractTransactionInitial} from './ContractTransactionInitial';
import {ContractVersion} from './ContractVersion';
import {ContractVersionAdditive} from './ContractVersionAdditive';

describe('ContractVersion', () => {
	it('should create a contract version', () => {
		const initialTransaction = new ContractTransactionInitial({
			id: '112',
			date: new Date('2022-08-15'),
			value: 27600,
		});

		const contractVersion = new ContractVersion({
			id: '112',
			date: new Date('2022-08-15'),
			dueDate: new Date('2023-02-15'),
			type: 'contract',
			rate: new ContractRate(1.5, 'perYear'),
			balance: 27600,
			initialTransaction,
		});

		const transactions = contractVersion.getTransactions();

		expect(contractVersion.getId()).toBe('112');
		expect(contractVersion.getDate()).toEqual(new Date('2022-08-15'));
		expect(contractVersion.getDueDate()).toEqual(new Date('2023-02-15'));
		expect(contractVersion.getType()).toBe('contract');
		expect(contractVersion.getRate()).toEqual(new ContractRate(1.5, 'perYear'));
		expect(contractVersion.getBalance()).toBe(27600);
		expect(transactions.initial).toEqual(initialTransaction);
	});

	it('shoud create an additive version with other transactions', () => {
		const initialTransaction = new ContractTransactionInitial({
			id: '112',
			date: new Date('2022-08-15'),
			value: 27600,
		});
		const additiveVersion = new ContractVersionAdditive({
			id: '200',
			date: new Date('2022-08-15'),
			dueDate: new Date('2023-02-15'),
			readjustmentDate: new Date('2022-09-20'),
			rate: new ContractRate(100, 'perYear'),
			initialTransaction,
			balance: 0,
		});

		const additiveContribution = new ContractTransaction({
			id: '200',
			type: 'contribution',
			date: new Date('2022-08-15'),
			value: 2400,
		});
		const additiveWithdraw = new ContractTransaction({
			id: '325',
			type: 'withdraw',
			date: new Date('2022-08-15'),
			value: 30000,
		});
		additiveVersion.addTransaction(additiveContribution);
		additiveVersion.addTransaction(additiveWithdraw);
		const transactions = additiveVersion.getTransactions();
		expect(transactions.others).toContainEqual(additiveContribution);
		expect(transactions.others).toContainEqual(additiveWithdraw);
	});
});

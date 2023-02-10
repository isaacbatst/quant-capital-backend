import {describe, expect, it} from 'vitest';
import {Contract} from './Contract';
import {ContractRate} from './ContractRate';
import {ContractTransaction} from './ContractTransaction';
import {ContractTransactionInitial} from './ContractTransactionInitial';
import {ContractVersion} from './ContractVersion';
import {ContractVersionAdditive} from './ContractVersionAdditive';

describe('Contract', () => {
	it('should create a contract with initial version', () => {
		const initialTransaction = new ContractTransactionInitial({
			id: '112',
			date: new Date('2022-08-15'),
			value: 27600,
		});
		const initialVersion = new ContractVersion({
			id: '112',
			date: new Date('2022-08-15'),
			dueDate: new Date('2023-02-15'),
			type: 'contract',
			rate: new ContractRate(100, 'perYear'),
			initialTransaction,
			balance: 27600,
		});
		const contract = new Contract({
			id: '112',
			date: new Date('2022-08-15'),
			clientId: '62',
			balance: 27600,
			initialVersion,
		});
		expect(contract.getId()).toBe('112');
		expect(contract.getDate()).toEqual(new Date('2022-08-15'));
		expect(contract.getUserId()).toBe('62');
		expect(contract.getBalance()).toBe(27600);
		expect(contract.getVersions().initial).toEqual(initialVersion);
	});

	it('should create a contract with an additive version', () => {
		const initialTransaction = new ContractTransactionInitial({
			id: '112',
			date: new Date('2022-08-15'),
			value: 27600,
		});
		const initialVersion = new ContractVersion({
			id: '112',
			date: new Date('2022-08-15'),
			dueDate: new Date('2023-02-15'),
			type: 'contract',
			rate: new ContractRate(1.5, 'perYear'),
			initialTransaction,
			balance: 27600,
		});
		const contract = new Contract({
			id: '112',
			date: new Date('2022-08-15'),
			balance: 0,
			initialVersion,
			clientId: '62',
		});
		const additiveVersion = new ContractVersionAdditive({
			id: '200',
			date: new Date('2022-08-15'),
			dueDate: new Date('2023-02-15'),
			readjustmentDate: new Date('2022-09-20'),
			rate: new ContractRate(1.5, 'perYear'),
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
		contract.addVersion(additiveVersion);
		expect(contract.getVersions().additives).toContainEqual(additiveVersion);
	});
});

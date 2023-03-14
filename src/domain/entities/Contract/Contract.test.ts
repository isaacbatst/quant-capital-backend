import {describe, expect, it} from 'vitest';
import {Contract} from './Contract';
import {ContractRate} from './ContractRate';
import {ContractTransaction} from './ContractTransaction';
import {ContractTransactionInitial} from './ContractTransactionInitial';
import {ContractVersion} from './ContractVersion';

describe('Contract', () => {
	it('should create a contract with initial version', () => {
		const initialTransaction = new ContractTransactionInitial({
			id: '112',
			date: new Date('2022-08-15'),
			value: 27600,
		});
		const initialVersion = new ContractVersion({
			id: '112',
			startDate: new Date('2022-08-15'),
			dueDate: new Date('2023-02-15'),
			type: 'contract',
			rate: new ContractRate(100, 'perYear'),
			initialTransaction,
			balance: 27600,
		});
		const contract = new Contract({
			id: '112',
			contractDate: new Date('2022-08-15'),
			clientId: '62',
			balance: 27600,
			initialVersion: {
				startDate: new Date('2022-08-15'),
				dueDate: new Date('2023-02-15'),
				rate: new ContractRate(100, 'perYear'),
				balance: 27600,
				initialTransactionValue: 27600,
			},
		});
		expect(contract.getId()).toBe('112');
		expect(contract.getDate()).toEqual(new Date('2022-08-15'));
		expect(contract.getClientId()).toBe('62');
		expect(contract.getBalance()).toBe(27600);
		expect(contract.getVersions().initial).toEqual(initialVersion);
	});

	it('should create a contract with an additive version', () => {
		const contract = new Contract({
			id: '112',
			contractDate: new Date('2022-08-15'),
			clientId: '62',
			balance: 0,
			initialVersion: {
				startDate: new Date('2022-08-15'),
				dueDate: new Date('2023-02-15'),
				rate: new ContractRate(1.5, 'perYear'),
				balance: 27600,
				initialTransactionValue: 27600,
			},
			additives: [
				{
					id: '200',
					startDate: new Date('2022-08-15'),
					dueDate: new Date('2023-02-15'),
					readjustmentDate: new Date('2022-09-20'),
					rate: new ContractRate(1.5, 'perYear'),
					balance: 0,
					otherTransactions: [
						new ContractTransaction({
							id: '200',
							type: 'contribution',
							date: new Date('2022-08-15'),
							value: 2400,
						}),
						new ContractTransaction({
							id: '325',
							type: 'withdraw',
							date: new Date('2022-08-15'),
							value: 30000,
						}),
					],
				},
			],
		});

		expect(contract.getVersions().additives[0]).toEqual(expect.objectContaining({
			id: '200',
		}));
		expect(contract.getVersions().additives[0].getTransactions().initial).toEqual(contract.getVersions().initial.getTransactions().initial);
	});

	it('should add additive version to contract', () => {
		const contract = new Contract({
			id: '112',
			contractDate: new Date('2022-08-15'),
			balance: 0,
			initialVersion: {
				startDate: new Date('2022-08-15'),
				dueDate: new Date('2023-02-15'),
				rate: new ContractRate(1.5, 'perYear'),
				balance: 27600,
				initialTransactionValue: 27600,
			},
			clientId: '62',
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

		const additive = contract.addAdditive({
			id: '200',
			startDate: new Date('2022-08-15'),
			dueDate: new Date('2023-02-15'),
			readjustmentDate: new Date('2022-09-20'),
			rate: new ContractRate(1.5, 'perYear'),
			balance: 0,
		});
		additive.addTransaction(additiveContribution);
		additive.addTransaction(additiveWithdraw);
		expect(contract.getVersions().additives).toContainEqual(additive);
		expect(contract.getVersions().additives[0].getTransactions().initial).toEqual(contract.getVersions().initial.getTransactions().initial);
	});

	it('should add additive version with previous transactions', () => {
		const firstAdditiveTransactions = [
			new ContractTransaction({
				id: '151',
				type: 'yield',
				date: new Date('2021-10-09'),
				value: 5000,
			}),
			new ContractTransaction({
				id: '114',
				date: new Date('2022-06-28'),
				type: 'withdraw',
				value: 5000,
			}),
		];

		const contract = new Contract({
			id: '11',
			clientId: '62',
			contractDate: new Date('2020-10-09'),
			balance: 0,
			initialVersion: {
				startDate: new Date('2020-10-09'),
				dueDate: new Date('2021-10-09'),
				rate: new ContractRate(1.5, 'perMonth'),
				balance: 5000,
				initialTransactionValue: 5000,
			},
			additives: [
				{
					id: '151',
					balance: 5000,
					readjustmentDate: new Date('2021-10-09'),
					dueDate: new Date('2022-10-09'),
					startDate: new Date('2021-10-09'),
					rate: new ContractRate(2, 'perMonth'),
					otherTransactions: firstAdditiveTransactions,
				},
				{
					id: '193',
					readjustmentDate: new Date('2022-09-09'),
					startDate: new Date('2022-09-11'),
					dueDate: new Date('2023-09-11'),
					balance: 0,
					rate: new ContractRate(2, 'perMonth'),
					otherTransactions: [
						new ContractTransaction({
							id: '287',
							date: new Date('2022-12-12'),
							type: 'withdraw',
							value: 5000,
						}),
					],
				},
			],
		});

		const versions = contract.getVersions();
		expect(versions.additives[0].getTransactions().initial).toBe(versions.initial.getTransactions().initial);
		expect(versions.additives[1].getTransactions().initial).toBe(versions.initial.getTransactions().initial);
		expect(versions.additives[1].getTransactions().others).toEqual(expect.arrayContaining(firstAdditiveTransactions));
	});
});

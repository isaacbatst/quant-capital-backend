import {Contract} from '../../../domain/entities/Contract/Contract';
import {ContractRate} from '../../../domain/entities/Contract/ContractRate';
import {ContractTransaction} from '../../../domain/entities/Contract/ContractTransaction';

export class ContractRepositoryFakeData {
	static get contracts(): Contract[] {
		return [
			new Contract({
				id: '112',
				contractDate: new Date('2022-08-15'),
				clientId: '62',
				balance: 27600,
				initialVersion: {
					startDate: new Date('2022-08-15'),
					dueDate: new Date('2023-02-15'),
					type: 'contract',
					rate: new ContractRate(1.5, 'perYear'),
					initialTransactionValue: 27600,
					balance: 27600,
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
			}),
			new Contract({
				id: '75',
				clientId: '60',
				balance: 200_000,
				contractDate: new Date('2021-08-20'),
				initialVersion: {
					startDate: new Date('2021-08-20'),
					dueDate: new Date('2023-08-20'),
					type: 'contract',
					rate: new ContractRate(1.5, 'perYear'),
					initialTransactionValue: 200_000,
					balance: 200_000,
				},
				additives: [
					{
						id: '87',
						startDate: new Date('2021-08-20'),
						dueDate: new Date('2022-08-20'),
						balance: 200_000,
						rate: new ContractRate(1.5, 'perYear'),
						readjustmentDate: new Date('2022-02-04'),
					},
					{
						id: '147',
						startDate: new Date('2021-08-20'),
						dueDate: new Date('2023-08-20'),
						readjustmentDate: new Date('2022-08-19'),
						balance: 200_000,
						rate: new ContractRate(1.5, 'perYear'),
					},
				],
			}),
			new Contract({
				id: '11',
				clientId: '62',
				contractDate: new Date('2020-10-09'),
				balance: 0,
				initialVersion: {
					startDate: new Date('2020-10-09'),
					dueDate: new Date('2021-10-09'),
					type: 'contract',
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
						otherTransactions: [
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
						],
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
			}),
		];
	}
}

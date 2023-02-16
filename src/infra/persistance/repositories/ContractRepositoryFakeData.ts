import {Contract} from '../../../domain/entities/Contract/Contract';
import {ContractRate} from '../../../domain/entities/Contract/ContractRate';

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
		];
	}
}

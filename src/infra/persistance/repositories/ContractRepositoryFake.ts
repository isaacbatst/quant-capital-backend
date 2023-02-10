import {Contract} from '../../../domain/entities/Contract/Contract';
import {ContractRate} from '../../../domain/entities/Contract/ContractRate';
import {ContractTransactionInitial} from '../../../domain/entities/Contract/ContractTransactionInitial';
import {ContractVersion} from '../../../domain/entities/Contract/ContractVersion';
import {type ContractRepository} from './ContractRepository';

export class ContractRepositoryFake implements ContractRepository {
	contracts: Contract[] = [];

	constructor() {
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
		this.contracts.push(contract);
	}

	async getById(id: string): Promise<Contract | undefined> {
		return this.contracts.find(contract => contract.getId() === id);
	}
}

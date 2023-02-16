import {type Contract} from '../../../domain/entities/Contract/Contract';
import {type ContractRepository} from './ContractRepository';
import {ContractRepositoryFakeData} from './ContractRepositoryFakeData';

export class ContractRepositoryFake implements ContractRepository {
	contracts: Contract[] = ContractRepositoryFakeData.contracts;

	async getById(id: string): Promise<Contract | undefined> {
		return this.contracts.find(contract => contract.getId() === id);
	}
}

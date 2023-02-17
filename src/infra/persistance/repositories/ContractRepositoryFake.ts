import {type Contract} from '../../../domain/entities/Contract/Contract';
import {ContractBrief} from '../../../domain/entities/Contract/ContractBrief';
import {type ContractRepository} from './ContractRepository';
import {ContractRepositoryFakeData} from './ContractRepositoryFakeData';

export class ContractRepositoryFake implements ContractRepository {
	contracts: Contract[] = ContractRepositoryFakeData.contracts;

	async getById(id: string, clientId: string): Promise<Contract | undefined> {
		return this.contracts.find(contract => contract.getId() === id && contract.getClientId() === clientId);
	}

	async getClientContractBriefs(clientId: string): Promise<ContractBrief[]> {
		return this.contracts
			.filter(contract => contract.getClientId() === clientId)
			.map(contract => new ContractBrief({
				id: contract.getId(),
				date: contract.getDate(),
				balance: contract.getBalance(),
				clientId: contract.getClientId(),
			}));
	}
}

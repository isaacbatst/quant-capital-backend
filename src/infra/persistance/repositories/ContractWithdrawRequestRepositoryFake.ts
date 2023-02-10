import {type ContractWithdrawRequest} from '../../../domain/entities/Contract/ContractWithdrawRequest';
import {type ContractWithdrawRequestRepository} from './ContractWithdrawRequestRepository';

export class ContractWithdrawRequestRepositoryFake implements ContractWithdrawRequestRepository {
	requests: ContractWithdrawRequest[] = [];

	async save(contractWithdrawRequest: ContractWithdrawRequest) {
		this.requests.push(contractWithdrawRequest);
	}

	async getById(id: string): Promise<ContractWithdrawRequest | undefined> {
		return this.requests.find(request => request.contractId);
	}
}

import {type ContractWithdrawRequest} from '../../../domain/entities/Contract/ContractWithdrawRequest';

export type ContractWithdrawRequestRepository = {
	save: (contractWithdrawRequest: ContractWithdrawRequest) => Promise<void>;
	getById: (id: string) => Promise<ContractWithdrawRequest | undefined>;
};

import {type Contract} from '../../../domain/entities/Contract/Contract';
import {type ContractBrief} from '../../../domain/entities/Contract/ContractBrief';

export type ContractRepository = {
	getById(contractId: string, clientId: string): Promise<Contract | undefined>;
	getContractBriefsByClientId(clientId: string): Promise<ContractBrief[]>;
	getContractsByClientId(clientId: string): Promise<Contract[]>;
};

import {type Contract} from '../../../domain/entities/Contract/Contract';

export type ContractRepository = {
	getById(contractId: string): Promise<Contract | undefined>;
	getClientContracts(clientId: string): Promise<Contract[]>;
};

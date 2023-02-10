import {type Contract} from '../../../domain/entities/Contract/Contract';

export type ContractRepository = {
	getById(id: string): Promise<Contract | undefined>;
};

import {ValidationError} from '../../errors/ValidationError';
import {ContractWithdrawRequestStatus} from './ContractWithdawRequestStatus';

type ContractWithdrawRequestParams = {
	contractId: string;
	value: number;
	id: string;
	createdAt: Date;
	status?: ContractWithdrawRequestStatus;
};

export class ContractWithdrawRequest {
	readonly id: string;
	readonly contractId: string;
	readonly value: number;
	readonly createdAt: Date;
	private readonly status: ContractWithdrawRequestStatus;
	constructor(
		params: ContractWithdrawRequestParams,
	) {
		this.id = params.id;
		this.contractId = params.contractId;
		this.value = params.value;
		this.createdAt = params.createdAt;
		this.status = params.status ?? ContractWithdrawRequestStatus.open;

		this.validateValue();
	}

	getStatus() {
		return this.status;
	}

	private validateValue() {
		if (this.value <= 0) {
			throw new ValidationError('INVALID_ZERO_VALUE');
		}
	}
}

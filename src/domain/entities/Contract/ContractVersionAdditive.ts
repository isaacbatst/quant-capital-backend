import {ContractVersion, type ContractVersionParams} from './ContractVersion';

type ContractVersionAdditiveParams = Omit<ContractVersionParams, 'type'> & {
	readjustmentDate: Date;
};

export class ContractVersionAdditive extends ContractVersion {
	private readonly readjustmentDate: Date;

	constructor(params: ContractVersionAdditiveParams) {
		super({
			...params,
			type: 'additive',
		});

		this.readjustmentDate = params.readjustmentDate;
	}

	getReajustmentDate(): Date {
		return this.readjustmentDate;
	}
}

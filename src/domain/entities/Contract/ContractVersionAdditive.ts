import {ContractVersion, type ContractVersionParams} from './ContractVersion';

export type ContractVersionAdditiveParams = Omit<ContractVersionParams, 'type'> & {
	readjustmentDate?: Date;
};

export class ContractVersionAdditive extends ContractVersion {
	private readonly readjustmentDate?: Date;

	constructor(params: ContractVersionAdditiveParams) {
		super({
			...params,
			type: 'additive',
		});

		this.readjustmentDate = params.readjustmentDate;
	}

	getReajustmentDate(): Date | undefined {
		return this.readjustmentDate;
	}
}

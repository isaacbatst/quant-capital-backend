/* eslint-disable @typescript-eslint/naming-convention */
import {type cliente_contrato_aditivo, type PrismaClient as PrismaRpClient} from '../../../../../prisma/generated/rpClient';
import {type Contract} from '../../../../domain/entities/Contract/Contract';
import {ContractBrief} from '../../../../domain/entities/Contract/ContractBrief';
import {type ContractRateType} from '../../../../domain/entities/Contract/ContractRate';
import {ContractTransaction, type ContractTransactionType} from '../../../../domain/entities/Contract/ContractTransaction';
import {type ContractRepository} from './ContractRepository';
import {ContractRepositoryPrismaDataMapper} from './ContractRepositoryPrismaDataMapper';

export class ContractRepositoryPrisma implements ContractRepository {
	constructor(private readonly rpPrisma: PrismaRpClient) {}
	async getById(contractId: string, clientId: string): Promise<Contract | undefined> {
		const dbContract = await this.rpPrisma.cliente_contrato.findFirst({
			where: {
				id: Number(contractId),
				cliente_id: Number(clientId),
			},
		});

		if (!dbContract) {
			return undefined;
		}

		if (!dbContract.data_contrato) {
			throw new Error('NO_CONTRACT_DATE');
		}

		const additives = await this.rpPrisma.cliente_contrato_aditivo.findMany({
			where: {
				cliente_contrato_id: dbContract.id,
			},
		});

		return ContractRepositoryPrismaDataMapper.toDomain(dbContract, additives);
	}

	async getContractBriefsByClientId(clientId: string): Promise<ContractBrief[]> {
		const contracts = await this.rpPrisma.cliente_contrato.findMany({
			where: {
				cliente_id: Number(clientId),
			},
		});

		return contracts.map(contract => new ContractBrief({
			balance: contract.valor.toNumber(),
			clientId: String(contract.cliente_id),
			date: contract.data_contrato ?? undefined,
			id: String(contract.id),
		}));
	}

	async getContractsByClientId(clientId: string): Promise<Contract[]> {
		const contracts = await this.rpPrisma.cliente_contrato.findMany({
			where: {
				cliente_id: Number(clientId),
			},
		});

		const promises = contracts.map<Promise<Contract>>(async contract => {
			const additives = await this.rpPrisma.cliente_contrato_aditivo.findMany({
				where: {
					cliente_contrato_id: contract.id,
				},
			});

			return ContractRepositoryPrismaDataMapper.toDomain(contract, additives);
		});

		return Promise.all(promises);
	}
}

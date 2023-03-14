import {type PrismaClient, type ContractWithdrawRequestStatus as PrismaContractWithdrawRequestStatus} from '../../../../../prisma/generated/appClient/';
import {ContractWithdrawRequestStatus} from '../../../../domain/entities/Contract/ContractWithdawRequestStatus';
import {ContractWithdrawRequest} from '../../../../domain/entities/Contract/ContractWithdrawRequest';
import {type ContractWithdrawRequestRepository} from './ContractWithdrawRequestRepository';

export class ContractWithdrawRequestRepositoryPrisma implements ContractWithdrawRequestRepository {
	private static readonly statusToDomain: Record<PrismaContractWithdrawRequestStatus, ContractWithdrawRequestStatus> = {
		open: ContractWithdrawRequestStatus.open,
		cancelled: ContractWithdrawRequestStatus.cancelled,
		finished: ContractWithdrawRequestStatus.finished,
	};

	constructor(
		private readonly appPrisma: PrismaClient,
	) {}

	async save(contractWithdrawRequest: ContractWithdrawRequest): Promise<void> {
		await this.appPrisma.contractWithdrawRequest.create({
			data: {
				contractId: contractWithdrawRequest.contractId,
				createdAt: contractWithdrawRequest.createdAt,
				id: contractWithdrawRequest.id,
				status: contractWithdrawRequest.getStatus(),
				value: contractWithdrawRequest.value,
			},
		});
	}

	async getById(id: string): Promise<ContractWithdrawRequest | undefined> {
		const found = await this.appPrisma.contractWithdrawRequest.findUnique({
			where: {
				id,
			},
		});

		if (!found) {
			return undefined;
		}

		return new ContractWithdrawRequest({
			id: found.id,
			contractId: found.contractId,
			createdAt: found.createdAt,
			status: ContractWithdrawRequestRepositoryPrisma.statusToDomain[found.status],
			value: found.value.toNumber(),
		});
	}
}

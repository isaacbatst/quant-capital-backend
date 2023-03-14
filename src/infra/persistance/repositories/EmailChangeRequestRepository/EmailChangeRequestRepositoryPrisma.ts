import {type ClientEmailChangeRequestStatus as PrismaEmailChangeRequestStatus, type PrismaClient} from '../../../../../prisma/generated/appClient';
import {EmailChangeRequest} from '../../../../domain/entities/Account/EmailChangeRequest';
import {EmailChangeRequestStatus} from '../../../../domain/entities/Account/EmailChangeRequestStatus';
import {type EmailChangeRequestRepository} from './EmailChangeRequestRepository';

export class EmailChangeRequestRepositoryPrisma implements EmailChangeRequestRepository {
	private static readonly statusToDomain: Record<PrismaEmailChangeRequestStatus, EmailChangeRequestStatus> = {
		cancelled: EmailChangeRequestStatus.cancelled,
		finished: EmailChangeRequestStatus.finished,
		open: EmailChangeRequestStatus.open,
	};

	constructor(
		private readonly appPrisma: PrismaClient,
	) {}

	async create(request: EmailChangeRequest): Promise<void> {
		await this.appPrisma.clientEmailChangeRequest.create({
			data: {
				id: request.id,
				status: request.getStatus(),
				clientId: request.clientId,
			},
		});
	}

	async getUserOpenRequests(userId: string): Promise<EmailChangeRequest[]> {
		const requests = await this.appPrisma.clientEmailChangeRequest.findMany({
			where: {
				clientId: userId,
				status: 'open',
			},
		});

		return requests.map(request =>
			new EmailChangeRequest(
				request.id,
				request.clientId,
				EmailChangeRequestRepositoryPrisma.statusToDomain[request.status],
			),
		);
	}

	async update(request: EmailChangeRequest): Promise<void> {
		await this.appPrisma.clientEmailChangeRequest.update({
			where: {
				id: request.id,
			},
			data: {
				status: request.getStatus(),
			},
		});
	}
}

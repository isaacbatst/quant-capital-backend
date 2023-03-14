import {type PrismaClient} from '../../../../../prisma/generated/appClient';
import {EmailAddress} from '../../../../domain/entities/Account/EmailAddress';
import {PasswordResetRequest} from '../../../../domain/entities/Account/PasswordResetRequest';
import {type PasswordResetRequestRepository} from './PasswordResetRequestRepository';

export class PasswordResetRequestRepositoryPrisma implements PasswordResetRequestRepository {
	constructor(
		private readonly appPrisma: PrismaClient,
	) {}

	async getByToken(token: string): Promise<PasswordResetRequest | undefined> {
		const found = await this.appPrisma.clientPasswordResetRequest.findUnique({
			where: {
				token,
			},
		});

		if (!found) {
			return undefined;
		}

		return new PasswordResetRequest({
			token: found.token,
			createdAt: found.createdAt,
			wasUsed: found.wasUsed,
			emailAddress: new EmailAddress(found.email),
		});
	}

	async save(request: PasswordResetRequest): Promise<void> {
		await this.appPrisma.clientPasswordResetRequest.create({
			data: {
				token: request.token,
				createdAt: request.createdAt,
				wasUsed: request.getWasUsed(),
				email: request.emailAddress.value,
				client: {
					connect: {
						email: request.emailAddress.value,
					},
				},
			},
		});
	}

	async update(request: PasswordResetRequest): Promise<void> {
		await this.appPrisma.clientPasswordResetRequest.update({
			where: {
				token: request.token,
			},
			data: {
				wasUsed: request.getWasUsed(),
			},
		});
	}
}

import {EmailChangeRequest} from '../../domain/entities/Account/EmailChangeRequest';
import {EmailChangeRequestStatus} from '../../domain/entities/Account/EmailChangeRequestStatus';
import {ConflictError} from '../../domain/errors/ConflictError';
import {type EmailChangeRequestRepository} from '../../infra/persistance/repositories/EmailChangeRequestRepository/EmailChangeRequestRepository';
import {type RepositoryFactory} from '../../infra/persistance/repositories/RepositoryFactory/RepositoryFactory';
import {type IdGenerator} from '../../infra/util/IdGenerator/IdGenerator';
import {type AuthService} from './AuthService';

type Input = {
	sessionToken: string;
};

export class RequestEmailChange {
	private readonly emailChangeRequestRepository: EmailChangeRequestRepository;

	constructor(
		repositoryFactory: RepositoryFactory,
		private readonly idGenerator: IdGenerator,
		private readonly authService: AuthService,
	) {
		this.emailChangeRequestRepository = repositoryFactory.emailChangeRequestRepository;
	}

	async execute(input: Input) {
		const account = await this.authService.getAccountBySessionToken(input.sessionToken);
		const userOpenRequests = await this.emailChangeRequestRepository.getUserOpenRequests(account.getId());
		if (userOpenRequests.length) {
			throw new ConflictError('DUPLICATED_REQUEST');
		}

		const id = await this.idGenerator.generate();
		const request = new EmailChangeRequest(id, account.getId(), EmailChangeRequestStatus.open);
		await this.emailChangeRequestRepository.create(request);
	}
}

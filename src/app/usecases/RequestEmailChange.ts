import {EmailChangeRequest} from '../../domain/entities/Account/EmailChangeRequest.';
import {EmailChangeRequestStatus} from '../../domain/entities/Account/EmailChangeRequestStatus';
import {AuthError} from '../../domain/errors/AuthError';
import {ConflictError} from '../../domain/errors/ConflictError';
import {type AccountRepository} from '../../infra/persistance/repositories/AccountRepository';
import {type EmailChangeRequestRepository} from '../../infra/persistance/repositories/EmailChangeRequestRepository';
import {type RepositoryFactory} from '../../infra/persistance/repositories/RepositoryFactory';
import {type IdGenerator} from '../../infra/util/IdGenerator/IdGenerator';

type Input = {
	sessionToken: string;
};

export class RequestEmailChange {
	private readonly accountRepository: AccountRepository;
	private readonly emailChangeRequestRepository: EmailChangeRequestRepository;

	constructor(
		repositoryFactory: RepositoryFactory,
		private readonly idGenerator: IdGenerator,
	) {
		this.accountRepository = repositoryFactory.accountRepository;
		this.emailChangeRequestRepository = repositoryFactory.emailChangeRequestRepository;
	}

	async execute(input: Input) {
		const account = await this.accountRepository.getBySessionToken(input.sessionToken);

		if (!account) {
			throw new AuthError('ACCOUNT_NOT_FOUND');
		}

		const userOpenRequests = await this.emailChangeRequestRepository.getUserOpenRequests(account.getId());

		if (userOpenRequests.length) {
			throw new ConflictError('DUPLICATED_REQUEST');
		}

		const id = await this.idGenerator.generate();
		const request = new EmailChangeRequest(id, account.getId(), EmailChangeRequestStatus.open);
		await this.emailChangeRequestRepository.create(request);
	}
}

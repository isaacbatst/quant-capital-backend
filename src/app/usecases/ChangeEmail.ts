import {type AccountRepository} from '../../infra/persistance/repositories/AccountRepository';
import {type RepositoryFactory} from '../../infra/persistance/repositories/RepositoryFactory';

type Input = {
	email: string;
	sessionToken: string;
};

export class ChangeEmail {
	readonly accountRepository: AccountRepository;

	constructor(
		repositoryFactory: RepositoryFactory,
	) {
		this.accountRepository = repositoryFactory.accountRepository;
	}

	async execute(input: Input) {
		const account = await this.accountRepository.getBySessionToken(input.sessionToken);

		if (!account) {
			throw new Error('ACCOUNT_NOT_FOUND');
		}

		account.changeEmail(input.email);
		await this.accountRepository.update(account);
	}
}

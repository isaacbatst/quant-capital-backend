import {PasswordFactory} from '../../domain/entities/PasswordFactory';
import {type AccountRepository} from '../../infra/persistance/repositories/AccountRepository';
import {type RepositoryFactory} from '../../infra/persistance/repositories/RepositoryFactory';
import {type Encrypter} from '../../infra/util/Encrypter/Encrypter';

type Input = {
	password: string;
	sessionToken: string;
};

export class ChangePassword {
	readonly accountRepository: AccountRepository;

	constructor(
		repositoryFactory: RepositoryFactory,
		readonly encrypter: Encrypter,
	) {
		this.accountRepository = repositoryFactory.accountRepository;
	}

	async execute(input: Input) {
		const account = await this.accountRepository.getBySessionToken(input.sessionToken);

		if (!account) {
			throw new Error('ACCOUNT_NOT_FOUND');
		}

		const password = await PasswordFactory.make(input.password, this.encrypter);
		account.changePassword(password);
		await this.accountRepository.update(account);
	}
}

import {ContractWithdrawRequest} from '../../domain/entities/Contract/ContractWithdrawRequest';
import {AuthError} from '../../domain/errors/AuthError';
import {NotFoundError} from '../../domain/errors/NotFoundError';
import {ValidationError} from '../../domain/errors/ValidationError';
import {type AccountRepository} from '../../infra/persistance/repositories/AccountRepository';
import {type ContractRepository} from '../../infra/persistance/repositories/ContractRepository';
import {type ContractWithdrawRequestRepository} from '../../infra/persistance/repositories/ContractWithdrawRequestRepository';
import {type RepositoryFactory} from '../../infra/persistance/repositories/RepositoryFactory';
import {type IdGenerator} from '../../infra/util/IdGenerator/IdGenerator';

type Input = {
	contractId: string;
	value: number;
	numericPassword: string;
	sessionToken: string;
};

export class RequestContractWithdraw {
	private readonly contractWithdrawRequestRepository: ContractWithdrawRequestRepository;
	private readonly contractRepository: ContractRepository;
	private readonly idGenerator: IdGenerator;
	private readonly accoundRepository: AccountRepository;

	constructor(repositoryFactory: RepositoryFactory, idGenerator: IdGenerator) {
		this.contractWithdrawRequestRepository = repositoryFactory.contractWithdrawRequestRepository;
		this.contractRepository = repositoryFactory.contractRepository;
		this.idGenerator = idGenerator;
		this.accoundRepository = repositoryFactory.accountRepository;
	}

	async execute(input: Input) {
		const account = await this.accoundRepository.getBySessionToken(input.sessionToken);

		if (!account) {
			throw new AuthError('ACCOUNT_NOT_FOUND');
		}

		const contract = await this.contractRepository.getById(input.contractId, account.getId());

		if (!contract) {
			throw new NotFoundError('CONTRACT_NOT_FOUND');
		}

		const balance = contract.getBalance();

		if (balance < input.value) {
			throw new ValidationError('INSUFFICIENT_BALANCE');
		}

		const id = await this.idGenerator.generate();
		const contractWithdrawRequest = new ContractWithdrawRequest({
			id,
			contractId: input.contractId,
			value: input.value,
		});
		await this.contractWithdrawRequestRepository.save(contractWithdrawRequest);
	}
}

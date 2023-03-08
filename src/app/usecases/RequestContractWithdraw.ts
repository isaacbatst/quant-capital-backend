import {ContractWithdrawRequest} from '../../domain/entities/Contract/ContractWithdrawRequest';
import {NotFoundError} from '../../domain/errors/NotFoundError';
import {ValidationError} from '../../domain/errors/ValidationError';
import {type ContractRepository} from '../../infra/persistance/repositories/ContractRepository';
import {type ContractWithdrawRequestRepository} from '../../infra/persistance/repositories/ContractWithdrawRequestRepository';
import {type RepositoryFactory} from '../../infra/persistance/repositories/RepositoryFactory';
import {type IdGenerator} from '../../infra/util/IdGenerator/IdGenerator';
import {type AuthService} from './AuthService';

type Input = {
	contractId: string;
	value: number;
	numericPassword: string;
	sessionToken: string;
};

export class RequestContractWithdraw {
	private readonly contractWithdrawRequestRepository: ContractWithdrawRequestRepository;
	private readonly contractRepository: ContractRepository;

	constructor(
		repositoryFactory: RepositoryFactory,
		private readonly idGenerator: IdGenerator,
		private readonly authService: AuthService,
	) {
		this.contractWithdrawRequestRepository = repositoryFactory.contractWithdrawRequestRepository;
		this.contractRepository = repositoryFactory.contractRepository;
	}

	async execute(input: Input) {
		if (input.value <= 0) {
			throw new ValidationError('INVALID_WITHDRAW_VALUE');
		}

		const account = await this.authService.getAccountBySessionToken(input.sessionToken);
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

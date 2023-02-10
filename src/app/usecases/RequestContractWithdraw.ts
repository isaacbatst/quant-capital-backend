import {ContractWithdrawRequest} from '../../domain/entities/Contract/ContractWithdrawRequest';
import {type ContractWithdrawRequestRepository} from '../../infra/persistance/repositories/ContractWithdrawRequestRepository';
import {type RepositoryFactory} from '../../infra/persistance/repositories/RepositoryFactory';
import {type IdGenerator} from '../../infra/util/IdGenerator/IdGenerator';

type Input = {
	contractId: string;
	value: number;
	password: string;
};

export class RequestContractWithdraw {
	private readonly contractWithdrawRequestRepository: ContractWithdrawRequestRepository;
	private readonly idGenerator: IdGenerator;

	constructor(repositoryFactory: RepositoryFactory, idGenerator: IdGenerator) {
		this.contractWithdrawRequestRepository = repositoryFactory.contractWithdrawRequestRepository;
		this.idGenerator = idGenerator;
	}

	async execute(input: Input) {
		const id = await this.idGenerator.generate();
		const contractWithdrawRequest = new ContractWithdrawRequest({
			id,
			contractId: input.contractId,
			value: input.value,
		});
		await this.contractWithdrawRequestRepository.save(contractWithdrawRequest);
	}
}

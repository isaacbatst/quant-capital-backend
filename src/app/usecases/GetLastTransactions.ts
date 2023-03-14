import {ContractsList} from '../../domain/entities/Contract/ContractsList';
import {type ContractTransactionType} from '../../domain/entities/Contract/ContractTransaction';
import {type ContractRepository} from '../../infra/persistance/repositories/ContractRepository/ContractRepository';
import {type RepositoryFactory} from '../../infra/persistance/repositories/RepositoryFactory';
import {type AuthService} from './AuthService';

type Input = {
	sessionToken: string;
};

type Output = {
	id: string;
	date: string;
	value: number;
	type: ContractTransactionType;
};

export class GetLastTransactions {
	private static get lastTransactionsLength() {
		return 6;
	}

	private readonly contractRepository: ContractRepository;
	private readonly authService: AuthService;

	constructor(
		repositoryFactory: RepositoryFactory,
		authService: AuthService,
	) {
		this.contractRepository = repositoryFactory.contractRepository;
		this.authService = authService;
	}

	async execute(input: Input): Promise<Output[]> {
		const account = await this.authService.getAccountBySessionToken(input.sessionToken);
		const contracts = await this.contractRepository.getContractsByClientId(account.getId());
		const contractsList = new ContractsList(contracts);
		const transactions = contractsList.getTransactions();
		const transactionsByDate = transactions.getTransactionsSortedByDate();
		const lastTransactions = transactionsByDate.slice(0, GetLastTransactions.lastTransactionsLength);
		return lastTransactions.map(transaction => ({
			date: transaction.getDate().toISOString(),
			id: transaction.getId(),
			value: transaction.getValue(),
			type: transaction.getType(),
		}));
	}
}

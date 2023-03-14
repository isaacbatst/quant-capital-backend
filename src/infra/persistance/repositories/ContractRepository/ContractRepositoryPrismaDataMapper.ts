import {type cliente_contrato, type cliente_contrato_aditivo} from '../../../../../prisma/generated/rpClient';
import {Contract} from '../../../../domain/entities/Contract/Contract';
import {type ContractRateType} from '../../../../domain/entities/Contract/ContractRate';
import {ContractTransaction, type ContractTransactionType} from '../../../../domain/entities/Contract/ContractTransaction';

export class ContractRepositoryPrismaDataMapper {
	static toDomain(dbContract: cliente_contrato, dbAdditives: cliente_contrato_aditivo[]): Contract {
		const contractRateType: ContractRateType = dbContract.data_vencimento_unico ? 'perYear' : 'perMonth';

		if (dbAdditives.length === 0) {
			return new Contract({
				clientId: String(dbContract.cliente_id),
				balance: dbContract.valor.toNumber(),
				contractDate: dbContract.data_contrato ?? undefined,
				id: String(dbContract.id),
				initialVersion: {
					balance: dbContract.valor.toNumber(),
					rate: {
						type: contractRateType,
						value: dbContract.taxa_do_contrato?.toNumber() ?? 0,
					},
					initialTransactionValue: dbContract.valor.toNumber(),
					dueDate: dbContract.data_vencimento_unico ?? dbContract.fim_vigencia,
					startDate: dbContract.inicio_vigencia,
				},
			});
		}

		dbAdditives.sort((a, b) => (a.data_reajuste?.getTime() ?? 0) - (b.data_reajuste?.getTime() ?? 0));

		const [firstAdditive] = dbAdditives;

		const initialVersionWithdraws: cliente_contrato_aditivo[] = [];

		const groupedAdditives = dbAdditives.reduce<cliente_contrato_aditivo[][]>((additives, additive) => {
			const isReadjustment = !additive.valor_reajustado || additive.valor_reajustado.toNumber() > 0;
			if (isReadjustment) {
				additives.push([additive]);
			}

			const isWithdraw = additive.valor_reajustado && additive.valor_reajustado.toNumber() < 0;
			if (isWithdraw) {
				if (additives.length > 0) {
					additives[additives.length - 1].push(additive);
				}

				if (additives.length === 0) {
					initialVersionWithdraws.push(additive);
				}
			}

			return additives;
		}, []);

		const contract = new Contract({
			clientId: String(dbContract.cliente_id),
			balance: dbContract.valor.toNumber(),
			contractDate: dbContract.data_contrato ?? undefined,
			id: String(dbContract.id),
			initialVersion: {
				balance: dbContract.valor.toNumber(),
				rate: {
					type: dbContract.data_vencimento_unico ? 'perYear' : 'perMonth',
					value: dbContract.taxa_do_contrato?.toNumber() ?? 0,
				},
				initialTransactionValue: firstAdditive.valor_anterior?.toNumber() ?? 0,
				dueDate: dbContract.data_vencimento_unico ?? dbContract.fim_vigencia,
				startDate: dbContract.inicio_vigencia,
				otherTransactions: initialVersionWithdraws.map<ContractTransaction>(transaction => new ContractTransaction({
					id: String(transaction.id),
					type: 'withdraw',
					value: transaction.valor_reajustado?.toNumber() ?? 0,
					date: transaction.data_reajuste ?? undefined,
				})),
			},
		});

		groupedAdditives.forEach(additives => {
			const additive = additives.shift();

			if (!additive) {
				return;
			}

			contract.addAdditive({
				balance: additive.valor_saldo?.toNumber() ?? 0,
				id: String(additive.id),
				dueDate: additive.data_vencimento_unico ?? additive.fim_vigencia ?? undefined,
				rate: {
					type: additive.data_vencimento_unico ? 'perYear' : 'perMonth',
					value: additive.taxa_do_contrato?.toNumber() ?? 0,
				},
				startDate: additive.inicio_vigencia ?? undefined,
				readjustmentDate: additive.data_reajuste ?? undefined,
				otherTransactions: additives.map<ContractTransaction>(transaction => {
					const transactionType: ContractTransactionType = transaction.valor_reajustado && transaction.valor_reajustado.toNumber() > 0
						? 'contribution' : 'withdraw';

					return new ContractTransaction({
						id: String(transaction.id),
						date: transaction.data_reajuste ?? undefined,
						value: transaction.valor_reajustado?.toNumber() ?? 0,
						type: transactionType,
					});
				}),
			});
		});

		return contract;
	}
}

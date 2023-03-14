import {NotFoundError} from '../../domain/errors/NotFoundError';
import {type AccountRepository} from '../../infra/persistance/repositories/AccountRepository/AccountRepository';
import {type AuthService} from './AuthService';

export class GetRegistrationData {
	constructor(
		private readonly accountRepository: AccountRepository,
		private readonly authService: AuthService,
	) {}

	async execute(input: {sessionToken: string}) {
		const account = await this.authService.getAccountBySessionToken(input.sessionToken);
		const registrationData = await this.accountRepository.getRegistrationData(account.getId());

		if (!registrationData) {
			throw new NotFoundError('REGISTRATION_DATA_NOT_FOUND');
		}

		return {
			name: registrationData.name,
			cpf: registrationData.cpf,
			birthDate: registrationData.birthDate,
			cep: registrationData.cep,
			street: registrationData.street,
			number: registrationData.number,
			complement: registrationData.complement,
			district: registrationData.district,
			city: registrationData.city,
			state: registrationData.state,
		};
	}
}

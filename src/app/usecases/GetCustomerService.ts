import {type CustomerService} from '../../domain/entities/CustomerService';
import {type AuthService} from './AuthService';

export class GetCustomerService {
	constructor(
		private readonly authService: AuthService,
	) {}

	async execute(sessionToken: string): Promise<CustomerService> {
		await this.authService.getAccountBySessionToken(sessionToken);

		return {
			email: 'contato@email.com',
			tel: '84 4002-0001',
			whatsapp: '+55 84 98740-2216',
			address: 'Rua Seridó, 344, Petrópolis, Natal - RN, 59020-010',
		};
	}
}

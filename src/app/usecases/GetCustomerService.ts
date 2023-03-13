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
			tel: '558433333333',
			whatsapp: '558488888888',
		};
	}
}

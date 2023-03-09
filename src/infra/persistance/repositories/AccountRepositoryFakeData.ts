import {Account} from '../../../domain/entities/Account/Account';
import {AccountRegistrationData} from '../../../domain/entities/Account/AccountRegistrationData';
import {EmailAddress} from '../../../domain/entities/Account/EmailAddress';

export class AccountRepositoryFakeData {
	static get accounts(): Array<{
		account: Account;
		sessionTokens: string[];
		pushTokens: string[] | undefined;
		registrationData: AccountRegistrationData;
	}> {
		return [
			{
				account: new Account({
					id: '25',
					email: new EmailAddress('test25@email.com'),
					passwordHash: '$2b$10$m7fi0dhDaXA9skOAnOYQ8eIa76eAlufvyWD4EKeNMVv/cdG8b2v92', // 123
					numericPasswordHash: '$2b$10$2tFdJovvhzZTQcEJDrBqNueXjbYUXtGF0AQmksAldkG9u178PBmcO', // 120943
					name: 'Cliente 25',
				}),
				sessionTokens: ['session-token-25'],
				pushTokens: ['push-token-25'],
				registrationData: new AccountRegistrationData({
					birthDate: '02/02/1990',
					name: 'Caio de Oliveira Silva',
					cpf: '064.682.434-16',
					cep: '59124-543',
					street: 'Avenida Campos Sales',
					number: '901',
					complement: '312',
					district: 'Tirol',
					city: 'Natal',
					state: 'Rio Grande do Norte',
				}),
			},
			{
				account: new Account({
					id: '62',
					name: 'Cliente 62',
					email: new EmailAddress('test62@email.com'),
					passwordHash: 'password-hash',
					numericPasswordHash: '$2b$10$2tFdJovvhzZTQcEJDrBqNueXjbYUXtGF0AQmksAldkG9u178PBmcO', // 120943
				}),
				sessionTokens: ['session-token-62'],
				pushTokens: ['push-token-62-a', 'push-token-62-b'],
				registrationData: new AccountRegistrationData({
					birthDate: '02/02/1991',
					name: 'Cliente 62',
					cpf: '066.682.434-16',
					cep: '58124-543',
					street: 'Avenida Salgado Filho',
					number: '902',
					complement: '312',
					district: 'Tirol',
					city: 'Natal',
					state: 'Rio Grande do Norte',
				}),
			},
		];
	}
}

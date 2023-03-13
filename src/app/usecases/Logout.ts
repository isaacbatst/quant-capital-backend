import {type AuthService} from './AuthService';

export class Logout {
	constructor(
		private readonly authService: AuthService,
	) {}

	async execute(sessionToken: string) {
		const account = await this.authService.getAccountBySessionToken(sessionToken);
		await this.authService.accountRepository.removeSessionToken(account.getId(), sessionToken);
	}
}

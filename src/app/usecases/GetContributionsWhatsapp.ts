import {type AuthService} from './AuthService';

export class GetContributionsWhatsapp {
	constructor(
		private readonly authService: AuthService,
	) {}

	async execute(sessionToken: string): Promise<string> {
		await this.authService.getAccountBySessionToken(sessionToken);

		return '5584988888888';
	}
}

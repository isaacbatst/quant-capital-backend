import {type AuthService} from './AuthService';

type Input = {
	sessionToken: string;
	pushToken: string;
};

export class SavePushToken {
	constructor(private readonly authService: AuthService) {}

	async execute(input: Input) {
		const account = await this.authService.getAccountBySessionToken(input.sessionToken);
		await this.authService.accountRepository.savePushToken(input.pushToken, account.getId());
	}
}

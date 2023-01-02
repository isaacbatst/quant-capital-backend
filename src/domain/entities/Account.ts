import {type EmailAddress} from './EmailAddress';

export class Account {
	constructor(
		private readonly email: EmailAddress,
		private passwordHash: string,
	) {
	}

	resetPassword(password: string): void {
		this.passwordHash = password;
	}

	getEmail(): EmailAddress {
		return this.email;
	}

	getPasswordHash(): string {
		return this.passwordHash;
	}
}

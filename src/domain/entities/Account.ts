import {EmailAddress} from './EmailAddress';
import {Password} from './Password';

export class Account {
	constructor(
		private email: EmailAddress,
		private passwordHash: string,
	) {
	}

	changeEmail(email: string) {
		this.email = new EmailAddress(email);
	}

	changePassword(password: string, hash: string): void {
		this.passwordHash = new Password(password, hash).hash;
	}

	getEmail(): EmailAddress {
		return this.email;
	}

	getPasswordHash(): string {
		return this.passwordHash;
	}
}

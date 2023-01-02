import {type EmailAddress} from './EmailAddress';
import {type Password} from './Password';

export class Account {
	constructor(
		private email: EmailAddress,
		private passwordHash: string,
	) {
	}

	changeEmail(email: EmailAddress) {
		this.email = email;
	}

	changePassword(password: Password): void {
		this.passwordHash = password.hash;
	}

	getEmail(): EmailAddress {
		return this.email;
	}

	getPasswordHash(): string {
		return this.passwordHash;
	}
}

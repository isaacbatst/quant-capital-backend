import {EmailAddress} from './EmailAddress';
import {Password} from './Password';

type AccountParams = {
	id: string;
	email: EmailAddress;
	passwordHash: string;
	numericPasswordHash: string;
};

export class Account {
	private readonly id: string;
	private email: EmailAddress;
	private passwordHash: string;
	private readonly numericPasswordHash: string;
	constructor(
		params: AccountParams,
	) {
		this.id = params.id;
		this.email = params.email;
		this.passwordHash = params.passwordHash;
		this.numericPasswordHash = params.numericPasswordHash;
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

	getNumericPasswordHash(): string {
		return this.numericPasswordHash;
	}

	getId(): string {
		return this.id;
	}
}

import {type EmailAddress} from './EmailAddress';

export class PasswordResetRequest {
	static get oneDay() {
		return 86_400_000;
	}

	readonly expiresAt: Date;
	private wasUsed = false;

	constructor(
		readonly token: string,
		readonly createdAt: Date,
		readonly emailAddress: EmailAddress,
	) {
		this.expiresAt = new Date(createdAt.getMilliseconds() + PasswordResetRequest.oneDay);
	}

	use() {
		if (this.wasUsed) {
			throw new Error('USED_PASSWORD_RESET');
		}

		this.wasUsed = true;
	}

	getWasUsed(): boolean {
		return this.wasUsed;
	}
}

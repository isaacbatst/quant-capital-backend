import {ConflictError} from '../../errors/ConflictError';
import {type EmailAddress} from './EmailAddress';

export type PasswordResetRequestParams = {
	token: string;
	createdAt: Date;
	emailAddress: EmailAddress;
	wasUsed?: boolean;
};

export class PasswordResetRequest {
	static get oneDay() {
		return 1000 * 60 * 60 * 24;
	}

	readonly token: string;
	readonly createdAt: Date;
	readonly emailAddress: EmailAddress;
	readonly expiresAt: Date;
	private wasUsed = false;

	constructor(
		params: PasswordResetRequestParams,
	) {
		this.token = params.token;
		this.createdAt = params.createdAt;
		this.wasUsed = params.wasUsed ?? false;
		this.emailAddress = params.emailAddress;
		this.expiresAt = new Date(this.createdAt.getTime() + PasswordResetRequest.oneDay);
	}

	use(now: Date = new Date()) {
		if (this.wasUsed) {
			throw new ConflictError('USED_PASSWORD_RESET');
		}

		if (this.expiresAt < now) {
			throw new ConflictError('EXPIRED_PASSWORD_RESET');
		}

		this.wasUsed = true;
	}

	getWasUsed(): boolean {
		return this.wasUsed;
	}
}

import {ValidationError} from '../../errors/ValidationError';

export class EmailAddress {
	static get regex() {
		return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
	}

	constructor(readonly value: string) {
		this.validateEmail();
	}

	private validateEmail() {
		if (!EmailAddress.regex.test(this.value)) {
			throw new ValidationError('INVALID_EMAIL');
		}
	}
}

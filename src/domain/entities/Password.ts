import {ValidationError} from '../errors/ValidationError';

export class Password {
	constructor(
		readonly value: string,
		readonly hash: string,
	) {
		this.validateValue();
		this.validateHash();
	}

	private validateValue() {
		if (this.value.length < 8) {
			throw new ValidationError('INVALID_PASSWORD_VALUE');
		}
	}

	private validateHash() {
		if (this.hash.length === 0) {
			throw new ValidationError('INVALID_PASSWORD_HASH');
		}
	}
}

import {type EmailAddress} from './EmailAddress';

export class Email {
	constructor(
		readonly to: EmailAddress,
		readonly subject: string,
		readonly message: string,
	) {
		this.validateSubject();
		this.validateMessage();
	}

	private validateSubject() {
		if (this.subject.length === 0) {
			throw new Error('INVALID_SUBJECT');
		}
	}

	private validateMessage() {
		if (this.message.length === 0) {
			throw new Error('INVALID_MESSAGE');
		}
	}
}

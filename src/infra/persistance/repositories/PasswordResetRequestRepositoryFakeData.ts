import {EmailAddress} from '../../../domain/entities/Account/EmailAddress';
import {PasswordResetRequest} from '../../../domain/entities/Account/PasswordResetRequest';

export class PasswordResetRequestRepositoryFakeData {
	static get requests(): PasswordResetRequest[] {
		return [
			new PasswordResetRequest({
				createdAt: new Date(),
				emailAddress: new EmailAddress('test25@email.com'),
				token: 'any-token',
			}),
			new PasswordResetRequest({
				createdAt: new Date(),
				emailAddress: new EmailAddress('unknown@email.com'),
				token: 'unknown-email-token',
			}),
		];
	}
}

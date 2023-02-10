import {type EmailChangeRequestStatus} from './EmailChangeRequestStatus';

export class EmailChangeRequest {
	constructor(
		readonly id: string,
		readonly userId: string,
		private readonly status: EmailChangeRequestStatus,
	) {}

	getStatus() {
		return this.status;
	}
}

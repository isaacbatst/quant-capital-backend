import {type EmailAddress} from '../Account/EmailAddress';

type Params = {
	tel: string;
	whatsapp: string;
	email: EmailAddress;
};

export class ProductContact {
	private readonly tel: string;
	private readonly whatsapp: string;
	private readonly email: EmailAddress;

	constructor(
		params: Params,
	) {
		this.tel = params.tel;
		this.whatsapp = params.whatsapp;
		this.email = params.email;
	}

	getTel(): string {
		return this.tel;
	}

	getWhatsapp(): string {
		return this.whatsapp;
	}

	getEmail(): EmailAddress {
		return this.email;
	}
}

type Params = {
	name?: string;
	cpf?: string;
	birthDate?: string;
	cep?: string;
	street?: string;
	number?: string;
	complement?: string;
	district?: string;
	city?: string;
	state?: string;
};

export class AccountRegistrationData {
	readonly name: string;
	readonly cpf: string;
	readonly birthDate: string;
	readonly cep: string;
	readonly street: string;
	readonly number: string;
	readonly complement: string;
	readonly district: string;
	readonly city: string;
	readonly state: string;

	constructor(
		params: Params,
	) {
		this.name = params.name ?? '';
		this.cpf = params.cpf ?? '';
		this.birthDate = params.birthDate ?? '';
		this.cep = params.cep ?? '';
		this.street = params.street ?? '';
		this.number = params.number ?? '';
		this.complement = params.complement ?? '';
		this.district = params.district ?? '';
		this.city = params.city ?? '';
		this.state = params.state ?? '';
	}
}

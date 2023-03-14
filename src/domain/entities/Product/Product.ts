import {type ProductContact} from './ProductContact';

type ProductParams = {
	description: string;
	contact: ProductContact;
	id: string;
	name: string;
	shortDescription: string;
	imageSrc: string;
	order: number;
};

export class Product {
	private readonly id: string;
	private readonly name: string;
	private readonly shortDescription: string;
	private readonly imageSrc: string;
	private readonly description: string;
	private readonly contact: ProductContact;
	private readonly order: number;

	constructor(
		params: ProductParams,
	) {
		this.id = params.id;
		this.name = params.name;
		this.shortDescription = params.shortDescription;
		this.imageSrc = params.imageSrc;
		this.description = params.description;
		this.contact = params.contact;
		this.order = params.order;
	}

	getId(): string {
		return this.id;
	}

	getName(): string {
		return this.name;
	}

	getShortDescription(): string {
		return this.shortDescription;
	}

	getImageSrc(): string {
		return this.imageSrc;
	}

	getDescription(): string {
		return this.description;
	}

	getContact(): ProductContact {
		return this.contact;
	}

	getOrder(): number {
		return this.order;
	}
}

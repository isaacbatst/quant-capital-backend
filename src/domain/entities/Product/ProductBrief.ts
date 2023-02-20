type ProductBriefParams = {
	id: string;
	name: string;
	shortDescription: string;
	imageSrc: string;
};

export class ProductBrief {
	private readonly id: string;
	private readonly name: string;
	private readonly shortDescription: string;
	private readonly imageSrc: string;

	constructor(
		params: ProductBriefParams,
	) {
		this.id = params.id;
		this.name = params.name;
		this.shortDescription = params.shortDescription;
		this.imageSrc = params.imageSrc;
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
}

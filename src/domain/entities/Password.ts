export class Password {
	constructor(
		readonly value: string,
	) {
		this.validateValue();
	}

	private validateValue() {
		if (this.value.length < 8) {
			throw new Error('INVALID_PASSWORD');
		}
	}
}

import {type IdGenerator} from './IdGenerator';

export class IdGeneratorFake implements IdGenerator {
	generatedId = 'any-id';

	async generate(): Promise<string> {
		return this.generatedId;
	}
}

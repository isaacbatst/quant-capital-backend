import {type TokenGenerator} from './TokenGenerator';

export class TokenGeneratorFake implements TokenGenerator {
	async generate(): Promise<string> {
		return 'any-token';
	}
}

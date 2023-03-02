import {type TokenGenerator} from './TokenGenerator';
import crypto from 'node:crypto';

export class TokenGeneratorCrypto implements TokenGenerator {
	async generate(): Promise<string> {
		return crypto.randomUUID();
	}
}

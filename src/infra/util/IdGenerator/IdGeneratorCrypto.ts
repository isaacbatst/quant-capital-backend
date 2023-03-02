import {type IdGenerator} from './IdGenerator';
import crypto from 'node:crypto';

export class IdGeneratorCrypto implements IdGenerator {
	async generate(): Promise<string> {
		return crypto.randomUUID();
	}
}

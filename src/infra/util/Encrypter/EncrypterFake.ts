import {vi} from 'vitest';
import {type Encrypter} from './Encrypter';

export class EncrypterFake implements Encrypter {
	hash = 'any-hash';
	isValid = true;
	encrypt = vi.fn(async (value: string) => this.hash);
	compare = vi.fn(async (value: string, hash: string) => this.isValid);
}

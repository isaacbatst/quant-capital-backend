import {vi} from 'vitest';
import {type Encrypter} from './Encrypter';

export class EncrypterFake implements Encrypter {
	hash = 'any-hash';
	encrypt = vi.fn(async (value: string) => this.hash);
}

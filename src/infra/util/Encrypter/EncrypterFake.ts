import {vi} from 'vitest';
import {type Encrypter} from './Encrypter';

export class EncrypterFake implements Encrypter {
	encrypt = vi.fn(async (value: string) => 'any-hash');
}

import {type Encrypter} from './Encrypter';

export class EncrypterFake implements Encrypter {
	encrypt = jest.fn(async (value: string) => 'any-hash');
}

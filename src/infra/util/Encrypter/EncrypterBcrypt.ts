import {type Encrypter} from './Encrypter';
import bcrypt from 'bcrypt';

export class EncrypterBcrypt implements Encrypter {
	async encrypt(value: string): Promise<string> {
		return bcrypt.hash(value, 10);
	}

	async compare(value: string, hash: string): Promise<boolean> {
		return bcrypt.compare(value, hash);
	}
}

import {type Encrypter} from '../../infra/util/Encrypter/Encrypter';
import {Password} from './Password';

export class PasswordFactory {
	static async make(password: string, encrypter: Encrypter) {
		const hash = await encrypter.encrypt(password);
		return new Password(password, hash);
	}
}

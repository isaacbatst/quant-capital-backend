import {describe, it} from 'vitest';
import {AccountRepositoryFake} from '../../infra/persistance/repositories/AccountRepository/AccountRepositoryFake';
import {EncrypterFake} from '../../infra/util/Encrypter/EncrypterFake';
import {TokenGeneratorFake} from '../../infra/util/TokenGenerator/TokenGeneratorFake';
import {Login} from './Login';

describe('Login', () => {
	it('should be able to login', async () => {
		const accountRepository = new AccountRepositoryFake();
		const encrypter = new EncrypterFake();
		const tokenGenerator = new TokenGeneratorFake();
		const login = new Login(accountRepository, encrypter, tokenGenerator);
		await login.execute('test25@email.com', 'password');
	});
});

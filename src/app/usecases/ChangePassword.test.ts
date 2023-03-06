import {describe, expect, it} from 'vitest';
import {RepositoryFactoryFake} from '../../infra/persistance/repositories/RepositoryFactoryFake';
import {EncrypterFake} from '../../infra/util/Encrypter/EncrypterFake';
import {AuthService} from './AuthService';
import {ChangePassword} from './ChangePassword';

const makeSut = () => {
	const encrypter = new EncrypterFake();
	const repositoryFactory = new RepositoryFactoryFake();
	const authService = new AuthService(repositoryFactory.accountRepository);
	const changePassword = new ChangePassword(repositoryFactory, encrypter, authService);

	return {
		encrypter,
		repositoryFactory,
		changePassword,
	};
};

describe('ChangePassword', () => {
	it('should change account password', async () => {
		const {changePassword, repositoryFactory, encrypter} = makeSut();
		encrypter.hash = 'new-hash';
		encrypter.isTheSame = false;
		await changePassword.execute({password: 'new-password', sessionToken: 'session-token-25'});
		const account = await repositoryFactory.accountRepository.getBySessionToken('session-token-25');
		expect(account).toBeDefined();
		expect(account!.getPasswordHash()).toBe(encrypter.hash);
	});

	it('should not change account password with unknown session token', async () => {
		const {changePassword} = makeSut();
		await expect(async () => {
			await changePassword.execute({password: 'any-password', sessionToken: 'any-token'});
		}).rejects.toThrow('ACCOUNT_NOT_FOUND');
	});

	it('should not change account password with invalid password', async () => {
		const {changePassword, encrypter} = makeSut();
		encrypter.isTheSame = false;
		await expect(async () => {
			await changePassword.execute({password: 'invalid', sessionToken: 'session-token-25'});
		}).rejects.toThrow('INVALID_PASSWORD_VALUE');
	});
});

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
		encrypter.compare.mockResolvedValueOnce(true);
		encrypter.compare.mockResolvedValueOnce(false);
		await changePassword.execute({password: 'new-password', currentPassword: 'current', sessionToken: 'session-token-25'});
		const account = await repositoryFactory.accountRepository.getBySessionToken('session-token-25');
		expect(account).toBeDefined();
		expect(account!.getPasswordHash()).toBe(encrypter.hash);
	});

	it('should not change account password with unknown session token', async () => {
		const {changePassword} = makeSut();
		await expect(async () => {
			await changePassword.execute({password: 'any-password', currentPassword: 'current', sessionToken: 'any-token'});
		}).rejects.toThrow('UNAUTHENTICATED');
	});

	it('should not change account password with invalid password', async () => {
		const {changePassword, encrypter} = makeSut();
		encrypter.compare.mockResolvedValueOnce(true);
		encrypter.compare.mockResolvedValueOnce(false);
		await expect(async () => {
			await changePassword.execute({password: 'invalid', currentPassword: 'current', sessionToken: 'session-token-25'});
		}).rejects.toThrow('INVALID_PASSWORD_VALUE');
	});

	it('should not change account password with wrong current password', async () => {
		const {changePassword, encrypter} = makeSut();
		encrypter.compare.mockResolvedValueOnce(false);
		encrypter.compare.mockResolvedValueOnce(false);
		await expect(async () => {
			await changePassword.execute({password: 'any-password', currentPassword: 'current-wrong', sessionToken: 'session-token-25'});
		}).rejects.toThrow('INVALID_CURRENT_PASSWORD');
	});
});

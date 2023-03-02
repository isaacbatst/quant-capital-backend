import {describe, expect, it} from 'vitest';
import {RepositoryFactoryFake} from '../../infra/persistance/repositories/RepositoryFactoryFake';
import {EncrypterFake} from '../../infra/util/Encrypter/EncrypterFake';
import {AuthService} from './AuthService';
import {ResetPassword} from './ResetPassword';

const makeSut = () => {
	const repositoryFactory = new RepositoryFactoryFake();
	const encrypter = new EncrypterFake();
	const authService = new AuthService(repositoryFactory.accountRepository);
	const resetPassword = new ResetPassword(repositoryFactory, encrypter, authService);

	return {
		repositoryFactory,
		encrypter,
		resetPassword,
	};
};

describe('ResetPassword', () => {
	it('should encrypt password', async () => {
		const {repositoryFactory, resetPassword, encrypter} = makeSut();
		await resetPassword.execute({password: 'new-password', token: 'any-token'});
		expect(encrypter.encrypt).toHaveBeenCalledWith('new-password');
	});

	it('should update account password hash', async () => {
		const {repositoryFactory, resetPassword, encrypter} = makeSut();
		await resetPassword.execute({password: 'new-password', token: 'any-token'});
		const account = await repositoryFactory.accountRepository.getByEmail('test25@email.com');
		expect(account).toBeDefined();
		expect(account!.getPasswordHash()).toBe(encrypter.hash);
	});

	it('should update password reset request', async () => {
		const {repositoryFactory, resetPassword} = makeSut();
		await resetPassword.execute({password: 'new-password', token: 'any-token'});
		const request = await repositoryFactory.passwordResetRequestRepository.getByToken('any-token');
		expect(request).toBeDefined();
		expect(request!.getWasUsed()).toBe(true);
	});

	it('should not update account password hash with unknown request', async () => {
		const {resetPassword} = makeSut();

		await expect(async () => {
			await resetPassword.execute({password: 'new-password', token: 'unknown-token'});
		}).rejects.toThrow('PASSWORD_RESET_REQUEST_NOT_FOUND');
	});

	it('should not update account password hash with unknown email', async () => {
		const {repositoryFactory, resetPassword} = makeSut();
		await expect(async () => {
			await resetPassword.execute({password: 'new-password', token: 'unknown-email-token'});
		}).rejects.toThrow('ACCOUNT_NOT_FOUND');
	});
});

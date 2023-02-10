import {describe, expect, it} from 'vitest';
import {Account} from '../../domain/entities/Account/Account';
import {EmailAddress} from '../../domain/entities/Account/EmailAddress';
import {PasswordResetRequest} from '../../domain/entities/Account/PasswordResetRequest';
import {RepositoryFactoryFake} from '../../infra/persistance/repositories/RepositoryFactoryFake';
import {EncrypterFake} from '../../infra/util/Encrypter/EncrypterFake';
import {ResetPassword} from './ResetPassword';

const makeSut = () => {
	const repositoryFactory = new RepositoryFactoryFake();
	const encrypter = new EncrypterFake();
	const resetPassword = new ResetPassword(repositoryFactory, encrypter);

	return {
		repositoryFactory,
		encrypter,
		resetPassword,
	};
};

describe('ResetPassword', () => {
	it('should encrypt password', async () => {
		const {repositoryFactory, resetPassword, encrypter} = makeSut();
		await repositoryFactory.accountRepository.save(new Account('any-id', new EmailAddress('any@email.com'), 'old-hash'));
		await repositoryFactory.passwordResetRequestRepository.save(
			new PasswordResetRequest({
				createdAt: new Date(),
				emailAddress: new EmailAddress('any@email.com'),
				token: 'any-token',
			}),
		);

		await resetPassword.execute({password: 'new-password', token: 'any-token'});

		expect(encrypter.encrypt).toHaveBeenCalledWith('new-password');
	});

	it('should update account password hash', async () => {
		const {repositoryFactory, resetPassword} = makeSut();
		const account = new Account('any-id', new EmailAddress('any@email.com'), 'old-hash');
		await repositoryFactory.accountRepository.save(account);
		await repositoryFactory.passwordResetRequestRepository.save(
			new PasswordResetRequest({
				createdAt: new Date(),
				emailAddress: new EmailAddress('any@email.com'),
				token: 'any-token',
			}),
		);

		await resetPassword.execute({password: 'new-password', token: 'any-token'});

		expect(account.getPasswordHash()).toBe('any-hash');
		expect(repositoryFactory.accountRepository.update).toHaveBeenCalledWith(account);
	});

	it('should update password reset request', async () => {
		const {repositoryFactory, resetPassword, encrypter} = makeSut();
		await repositoryFactory.accountRepository.save(new Account('any-id', new EmailAddress('any@email.com'), 'old-hash'));
		const request = new PasswordResetRequest({
			createdAt: new Date(),
			emailAddress: new EmailAddress('any@email.com'),
			token: 'any-token',
		});
		await repositoryFactory.passwordResetRequestRepository.save(request);

		await resetPassword.execute({password: 'new-password', token: 'any-token'});

		expect(request.getWasUsed()).toBe(true);
	});

	it('should not update account password hash with unknown request', async () => {
		const {resetPassword} = makeSut();

		await expect(async () => {
			await resetPassword.execute({password: 'new-password', token: 'any-token'});
		}).rejects.toThrow('PASSWORD_RESET_REQUEST_NOT_FOUND');
	});

	it('should not update account password hash with unknown email', async () => {
		const {repositoryFactory, resetPassword} = makeSut();
		await repositoryFactory.passwordResetRequestRepository.save(
			new PasswordResetRequest({
				createdAt: new Date(),
				emailAddress: new EmailAddress('any@email.com'),
				token: 'any-token',
			}),
		);

		await expect(async () => {
			await resetPassword.execute({password: 'new-password', token: 'any-token'});
		}).rejects.toThrow('ACCOUNT_NOT_FOUND');
	});
});

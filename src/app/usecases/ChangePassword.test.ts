import {Account} from '../../domain/entities/Account';
import {EmailAddress} from '../../domain/entities/EmailAddress';
import {RepositoryFactoryFake} from '../../infra/persistance/repositories/RepositoryFactoryFake';
import {EncrypterFake} from '../../infra/util/Encrypter/EncrypterFake';
import {ChangePassword} from './ChangePassword';

const makeSut = () => {
	const encrypter = new EncrypterFake();
	const repositoryFactory = new RepositoryFactoryFake();
	const changePassword = new ChangePassword(repositoryFactory, encrypter);

	return {
		encrypter,
		repositoryFactory,
		changePassword,
	};
};

describe('ChangePassword', () => {
	it('should change account password', async () => {
		const {changePassword, repositoryFactory} = makeSut();
		const account = new Account(new EmailAddress('any@email.com'), 'old-hash');
		await repositoryFactory.accountRepository.save(account, 'any-token');

		await changePassword.execute({password: 'new-password', sessionToken: 'any-token'});
		expect(account.getPasswordHash()).toBe('any-hash');
	});

	it('should not change account password with unknown session token', async () => {
		const {changePassword} = makeSut();

		await expect(async () => {
			await changePassword.execute({password: 'new-password', sessionToken: 'any-token'});
		}).rejects.toThrow('ACCOUNT_NOT_FOUND');
	});

	it('should not change account password with invalid password', async () => {
		const {changePassword, repositoryFactory} = makeSut();
		const account = new Account(new EmailAddress('any@email.com'), 'old-hash');
		await repositoryFactory.accountRepository.save(account, 'any-token');

		await expect(async () => {
			await changePassword.execute({password: 'invalid', sessionToken: 'any-token'});
		}).rejects.toThrow('INVALID_PASSWORD_VALUE');
	});
});

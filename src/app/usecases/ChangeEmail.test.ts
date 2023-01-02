import {Account} from '../../domain/entities/Account';
import {EmailAddress} from '../../domain/entities/EmailAddress';
import {RepositoryFactoryFake} from '../../infra/persistance/repositories/RepositoryFactoryFake';
import {ChangeEmail} from './ChangeEmail';

const makeSut = () => {
	const repositoryFactory = new RepositoryFactoryFake();
	const changeEmail = new ChangeEmail(repositoryFactory);

	return {
		changeEmail,
		repositoryFactory,
	};
};

describe('ChangeEmail', () => {
	it('should change account email', async () => {
		const {changeEmail, repositoryFactory} = makeSut();
		const emailAddress = new EmailAddress('any@email.com');
		const account = new Account(emailAddress, 'any-hash');
		await repositoryFactory.accountRepository.save(account, 'any-token');

		await changeEmail.execute({email: 'new@email.com', sessionToken: 'any-token'});

		expect(account.getEmail()).toEqual(new EmailAddress('new@email.com'));
		expect(repositoryFactory.accountRepository.update).toHaveBeenCalledWith(account);
	});
});

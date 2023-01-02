import {EmailAddress} from '../../domain/entities/EmailAddress';
import {User} from '../../domain/entities/User';
import {EmailGatewayFake} from '../../infra/gateways/EmailGateway/EmailGatewayFake';
import {RepositoryFactoryFake} from '../../infra/persistance/repositories/RepositoryFactoryFake';
import {TokenGeneratorFake} from '../../infra/util/TokenGenerator/TokenGeneratorFake';
import {ForgotMyPassword} from './ForgotMyPassword';

const makeSut = () => {
	const tokenGenerator = new TokenGeneratorFake();
	const emailGateway = new EmailGatewayFake();
	const repositoryFactory = new RepositoryFactoryFake();
	const forgotMyPassword = new ForgotMyPassword(repositoryFactory, tokenGenerator, emailGateway, 'test.url');

	return {
		forgotMyPassword,
		repositoryFactory,
	};
};

describe('ForgotMyPassword', () => {
	it('should save request', async () => {
		const {forgotMyPassword, repositoryFactory} = makeSut();
		await repositoryFactory.userRepository.save(new User(new EmailAddress('any@email.com'), 'any-hash'));
		await forgotMyPassword.execute({email: 'any@email.com'});

		expect(repositoryFactory.passwordResetRequestRepository.requests).toContainEqual(expect.objectContaining({emailAddress: new EmailAddress('any@email.com')}));
	});

	it('should not save request with unknown email', async () => {
		const {forgotMyPassword} = makeSut();

		await expect(async () => {
			await forgotMyPassword.execute({email: 'unknown@email.com'});
		}).rejects.toThrow('USER_NOT_FOUND');
	});
});

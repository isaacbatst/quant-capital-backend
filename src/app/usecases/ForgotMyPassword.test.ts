import {describe, expect, it} from 'vitest';
import {Account} from '../../domain/entities/Account/Account';
import {EmailAddress} from '../../domain/entities/Account/EmailAddress';
import {EmailGatewayFake} from '../../infra/gateways/EmailGateway/EmailGatewayFake';
import {RepositoryFactoryFake} from '../../infra/persistance/repositories/RepositoryFactoryFake';
import {TokenGeneratorFake} from '../../infra/util/TokenGenerator/TokenGeneratorFake';
import {AuthService} from './AuthService';
import {ForgotMyPassword} from './ForgotMyPassword';

const makeSut = () => {
	const tokenGenerator = new TokenGeneratorFake();
	const emailGateway = new EmailGatewayFake();
	const repositoryFactory = new RepositoryFactoryFake();
	const authService = new AuthService(repositoryFactory.accountRepository);
	const forgotMyPassword = new ForgotMyPassword({
		repositoryFactory,
		tokenGenerator,
		emailGateway,
		authService,
		appUrl: 'test.url',
	});

	return {
		forgotMyPassword,
		repositoryFactory,
	};
};

describe('ForgotMyPassword', () => {
	it('should save request', async () => {
		const {forgotMyPassword, repositoryFactory} = makeSut();
		await forgotMyPassword.execute({email: 'test25@email.com'});

		expect(repositoryFactory.passwordResetRequestRepository.requests).toHaveLength(3);
		expect(repositoryFactory.passwordResetRequestRepository.requests[2].emailAddress).toEqual(new EmailAddress('test25@email.com'));
	});

	it('should not save request with unknown email', async () => {
		const {forgotMyPassword} = makeSut();

		await expect(async () => {
			await forgotMyPassword.execute({email: 'unknown@email.com'});
		}).rejects.toThrow('ACCOUNT_NOT_FOUND');
	});
});

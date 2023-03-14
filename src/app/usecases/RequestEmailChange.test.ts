import {describe, expect, it} from 'vitest';
import {EmailChangeRequest} from '../../domain/entities/Account/EmailChangeRequest';
import {EmailChangeRequestStatus} from '../../domain/entities/Account/EmailChangeRequestStatus';
import {RepositoryFactoryFake} from '../../infra/persistance/repositories/RepositoryFactory/RepositoryFactoryFake';
import {IdGeneratorFake} from '../../infra/util/IdGenerator/IdGeneratorFake';
import {AuthService} from './AuthService';
import {RequestEmailChange} from './RequestEmailChange';

const makeSut = () => {
	const repositoryFactory = new RepositoryFactoryFake('http://test.url');
	const idGenerator = new IdGeneratorFake();
	const authService = new AuthService(repositoryFactory.accountRepository);
	const requestEmailChange = new RequestEmailChange(repositoryFactory, idGenerator, authService);

	return {
		requestEmailChange,
		repositoryFactory,
		idGenerator,
	};
};

describe('RequestEmailChange', () => {
	it('should save an email change request', async () => {
		const {requestEmailChange, repositoryFactory: {
			emailChangeRequestRepository,
		}} = makeSut();
		await requestEmailChange.execute({sessionToken: 'session-token-25'});
		const openRequests = await emailChangeRequestRepository.getUserOpenRequests('25');
		expect(openRequests).toHaveLength(1);
	});

	it('should not save an email change request if another is open for the same user', async () => {
		const {requestEmailChange} = makeSut();
		await requestEmailChange.execute({sessionToken: 'session-token-25'});

		await expect(async () => {
			await requestEmailChange.execute({sessionToken: 'session-token-25'});
		}).rejects.toThrow('DUPLICATED_REQUEST');
	});

	it('should save an email change request if others are not open for the same user', async () => {
		const {requestEmailChange, idGenerator, repositoryFactory: {
			emailChangeRequestRepository,
		}} = makeSut();
		idGenerator.generatedId = 'request-id';
		await requestEmailChange.execute({sessionToken: 'session-token-25'});
		await emailChangeRequestRepository.update(new EmailChangeRequest('request-id', '25', EmailChangeRequestStatus.finished));
		await requestEmailChange.execute({sessionToken: 'session-token-25'});
		await emailChangeRequestRepository.update(new EmailChangeRequest('request-id', '25', EmailChangeRequestStatus.cancelled));

		await requestEmailChange.execute({sessionToken: 'session-token-25'});
		const openRequests = await emailChangeRequestRepository.getUserOpenRequests('25');
		expect(openRequests).toHaveLength(1);
	});
});

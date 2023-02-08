import {describe, expect, it} from 'vitest';
import {Account} from '../../domain/entities/Account';
import {EmailAddress} from '../../domain/entities/EmailAddress';
import {EmailChangeRequest} from '../../domain/entities/EmailChangeRequest.';
import {EmailChangeRequestStatus} from '../../domain/entities/EmailChangeRequestStatus';
import {RepositoryFactoryFake} from '../../infra/persistance/repositories/RepositoryFactoryFake';
import {IdGeneratorFake} from '../../infra/util/IdGenerator/IdGeneratorFake';
import {RequestEmailChange} from './RequestEmailChange';

const makeSut = () => {
	const repositoryFactory = new RepositoryFactoryFake();
	const idGenerator = new IdGeneratorFake();
	const requestEmailChange = new RequestEmailChange(repositoryFactory, idGenerator);

	return {
		requestEmailChange,
		repositoryFactory,
		idGenerator,
	};
};

describe('RequestEmailChange', () => {
	it('should save an email change request', async () => {
		const {requestEmailChange, repositoryFactory: {
			accountRepository, emailChangeRequestRepository,
		}} = makeSut();
		await accountRepository.save(new Account('user-id', new EmailAddress('email@email.com'), 'any-hash'), 'user-token');
		await requestEmailChange.execute({sessionToken: 'user-token'});
		const openRequests = await emailChangeRequestRepository.getUserOpenRequests('user-id');
		expect(openRequests).toHaveLength(1);
	});

	it('should not save an email change request if another is open for the same user', async () => {
		const {requestEmailChange, repositoryFactory: {
			accountRepository,
		}} = makeSut();
		await accountRepository.save(new Account('user-id', new EmailAddress('email@email.com'), 'any-hash'), 'user-token');
		await requestEmailChange.execute({sessionToken: 'user-token'});

		await expect(async () => {
			await requestEmailChange.execute({sessionToken: 'user-token'});
		}).rejects.toThrow('DUPLICATED_REQUEST');
	});

	it('should save an email change request if others are not open for the same user', async () => {
		const {requestEmailChange, idGenerator, repositoryFactory: {
			accountRepository, emailChangeRequestRepository,
		}} = makeSut();
		idGenerator.generatedId = 'request-id';
		await accountRepository.save(new Account('user-id', new EmailAddress('email@email.com'), 'any-hash'), 'user-token');
		await requestEmailChange.execute({sessionToken: 'user-token'});
		await emailChangeRequestRepository.update(new EmailChangeRequest('request-id', 'user-id', EmailChangeRequestStatus.finished));
		await requestEmailChange.execute({sessionToken: 'user-token'});
		await emailChangeRequestRepository.update(new EmailChangeRequest('request-id', 'user-id', EmailChangeRequestStatus.cancelled));

		await requestEmailChange.execute({sessionToken: 'user-token'});
		const openRequests = await emailChangeRequestRepository.getUserOpenRequests('user-id');
		expect(openRequests).toHaveLength(1);
	});
});

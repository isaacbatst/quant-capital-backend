import {describe, expect, it} from 'vitest';
import {AccountRepositoryFake} from '../../infra/persistance/repositories/AccountRepositoryFake';
import {NotificationRepositoryFake} from '../../infra/persistance/repositories/NotificationRepositoryFake';
import {AuthService} from './AuthService';
import {ViewNotification} from './ViewNotification';

describe('ViewNotification', () => {
	it('should persist notification view', async () => {
		const notificationRepository = new NotificationRepositoryFake();
		const accountRepository = new AccountRepositoryFake();
		const authService = new AuthService(accountRepository);
		const viewNotification = new ViewNotification(notificationRepository, authService);
		await viewNotification.execute({
			sessionToken: 'session-token-25',
			notificationId: '15',
		});
	});

	it('should not view notification already viewed', async () => {
		const notificationRepository = new NotificationRepositoryFake();
		const accountRepository = new AccountRepositoryFake();
		const authService = new AuthService(accountRepository);
		const viewNotification = new ViewNotification(notificationRepository, authService);
		await viewNotification.execute({
			sessionToken: 'session-token-25',
			notificationId: '15',
		});
		return expect(async () => {
			await viewNotification.execute({
				sessionToken: 'session-token-25',
				notificationId: '15',
			});
		}).rejects.toThrow('ALREADY_VIEWED');
	});
});

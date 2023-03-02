import {describe, expect, it} from 'vitest';
import {NotificationRepositoryFake} from '../../infra/persistance/repositories/NotificationRepositoryFake';
import {RepositoryFactoryFake} from '../../infra/persistance/repositories/RepositoryFactoryFake';
import {AuthService} from './AuthService';
import {GetUnreadNotificationsCount} from './GetUnreadNotificationsCount';

describe('GetUnreadNotificationsCount', () => {
	it('should get client unread notifications count', async () => {
		const repositoryFactory = new RepositoryFactoryFake();
		const notificationRepository = new NotificationRepositoryFake();
		const authService = new AuthService(repositoryFactory.accountRepository);
		const getUnreadNotificationsCount = new GetUnreadNotificationsCount(notificationRepository, authService);
		const unreadNotificationsCount = await getUnreadNotificationsCount.execute({
			sessionToken: 'session-token-25',
		});
		expect(unreadNotificationsCount).toBe(14);
	});
});

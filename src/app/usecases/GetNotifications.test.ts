import {describe, expect, it} from 'vitest';
import {NotificationRepositoryFake} from '../../infra/persistance/repositories/NotificationRepositoryFake';
import {RepositoryFactoryFake} from '../../infra/persistance/repositories/RepositoryFactoryFake';
import {AuthService} from './AuthService';
import {GetNotifications} from './GetNotifications';

describe('GetNotifications', () => {
	it('should get client page 1 notifications', async () => {
		const repositoryFactory = new RepositoryFactoryFake('http://test.url');
		const notificationRepository = new NotificationRepositoryFake();
		const authService = new AuthService(repositoryFactory.accountRepository);
		const getNotifications = new GetNotifications(notificationRepository, authService);
		const notifications = await getNotifications.execute({
			sessionToken: 'session-token-25',
			page: 1,
		});
		expect(notifications[0].id).toBe('1');
		expect(notifications[0].isViewed).toBe(true);
		expect(notifications[14].id).toBe('15');
		expect(notifications[14].isViewed).toBe(false);
		expect(notifications.length).toBe(15);
	});

	it('should get client page 2 notifications', async () => {
		const repositoryFactory = new RepositoryFactoryFake('http://test.url');
		const notificationRepository = new NotificationRepositoryFake();
		const authService = new AuthService(repositoryFactory.accountRepository);
		const getNotifications = new GetNotifications(notificationRepository, authService);
		const notifications = await getNotifications.execute({
			sessionToken: 'session-token-25',
			page: 2,
		});
		expect(notifications[0].id).toBe('16');
		expect(notifications[0].isViewed).toBe(true);
		expect(notifications.length).toBe(1);
	});
});

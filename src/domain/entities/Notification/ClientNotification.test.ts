import {describe, expect, it} from 'vitest';
import {ClientNotification} from './ClientNotification';
import {NotificationType} from './Notification';

describe('ClientNotification', () => {
	it('should create a client notification', () => {
		const now = new Date();
		const notificationData = {
			id: 'id',
			body: 'body',
			title: 'title',
			createdAt: now,
			type: NotificationType.basic,
		};
		const clientNotification = new ClientNotification(notificationData, false, '25');
		expect(clientNotification.getNotification()).toEqual(notificationData);
		expect(clientNotification.getIsViewed()).toBe(false);
	});

	it('should view notification', () => {
		const now = new Date();
		const clientNotification = new ClientNotification({
			id: 'id',
			body: 'body',
			title: 'title',
			createdAt: now,
			type: NotificationType.basic,
		}, false, '25');
		clientNotification.view();
		expect(clientNotification.getIsViewed()).toBe(true);
	});

	it('should not view notification alread viewed', () => {
		const now = new Date();
		const clientNotification = new ClientNotification({
			id: 'id',
			body: 'body',
			title: 'title',
			createdAt: now,
			type: NotificationType.basic,
		}, true, '25');

		expect(() => {
			clientNotification.view();
		}).toThrow('ALREADY_VIEWED');
	});
});

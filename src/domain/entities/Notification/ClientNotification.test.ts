import {describe, expect, it} from 'vitest';
import {ClientNotification} from './ClientNotification';
import {NotificationBasic} from './NotificationBasic';

describe('ClientNotification', () => {
	it('should create a client notification', () => {
		const now = new Date();
		const notification = new NotificationBasic({
			id: 'id',
			body: 'body',
			title: 'title',
			createdAt: now,
			to: ['client-id-1', 'client-id-2'],
		});
		const clientNotification = new ClientNotification(notification, false);
		expect(clientNotification.getNotification()).toEqual(notification);
		expect(clientNotification.getIsViewed()).toBe(false);
	});

	it('should view notification', () => {
		const now = new Date();
		const notification = new NotificationBasic({
			id: 'id',
			body: 'body',
			title: 'title',
			createdAt: now,
			to: ['client-id-1', 'client-id-2'],
		});
		const clientNotification = new ClientNotification(notification, false);
		clientNotification.view();
		expect(clientNotification.getIsViewed()).toBe(true);
	});

	it('should not view notification alread viewed', () => {
		const now = new Date();
		const notification = new NotificationBasic({
			id: 'id',
			body: 'body',
			title: 'title',
			createdAt: now,
			to: ['client-id-1', 'client-id-2'],
		});
		const clientNotification = new ClientNotification(notification, true);

		expect(() => {
			clientNotification.view();
		}).toThrow('ALREADY_VIEWED');
	});
});

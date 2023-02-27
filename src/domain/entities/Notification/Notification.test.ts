import {describe, expect, it} from 'vitest';
import {NotificationBasic} from './NotificationBasic';
import {AppRoutePath, NotificationNavigator} from './NotificationNavigator';

describe('Notification', () => {
	it('should create a basic notification', () => {
		const now = new Date();
		const notification = new NotificationBasic({
			id: 'id',
			body: 'body',
			title: 'title',
			createdAt: now,
		});
		expect(notification.getId()).toBe('id');
		expect(notification.getBody()).toBe('body');
		expect(notification.getTitle()).toBe('title');
		expect(notification.getCreatedAt()).toEqual(now);
	});

	it('should creat a navigator notification', () => {
		const now = new Date();
		const notification = new NotificationNavigator({
			id: 'id',
			body: 'body',
			title: 'title',
			createdAt: now,
			payload: {
				to: AppRoutePath.myAccount,
			},
		});

		expect(notification.getId()).toBe('id');
		expect(notification.getBody()).toBe('body');
		expect(notification.getTitle()).toBe('title');
		expect(notification.getCreatedAt()).toEqual(now);
		expect(notification.getPayload()).toEqual({to: AppRoutePath.myAccount});
	});
});

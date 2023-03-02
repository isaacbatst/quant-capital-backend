import {type Notification} from '../../../domain/entities/Notification/Notification';
import {NotificationBasic} from '../../../domain/entities/Notification/NotificationBasic';

export class NotificationRepositoryFakeData {
	static get notifications(): Array<{notification: Notification; isViewed: boolean}> {
		return [
			{
				notification: new NotificationBasic({
					id: '1',
					title: 'Title 1',
					body: 'Body 1',
					createdAt: new Date('2022-01-01T00:00:00.000Z'),
					to: ['25', '62'],
				}),
				isViewed: true,
			},
			{
				notification: new NotificationBasic({
					id: '2',
					title: 'Title 2',
					body: 'Body 2',
					createdAt: new Date('2022-02-02T00:00:00.000Z'),
					to: ['25', '62'],
				}),
				isViewed: false,
			},
			{
				notification: new NotificationBasic({
					id: '3',
					title: 'Title 3',
					body: 'Body 3',
					createdAt: new Date('2022-02-02T00:00:00.000Z'),
					to: ['25', '62'],
				}),
				isViewed: false,
			},
			{
				notification: new NotificationBasic({
					id: '4',
					title: 'Title 4',
					body: 'Body 4',
					createdAt: new Date('2022-02-02T00:00:00.000Z'),
					to: ['25', '62'],
				}),
				isViewed: false,
			},
			{
				notification: new NotificationBasic({
					id: '5',
					title: 'Title 5',
					body: 'Body 5',
					createdAt: new Date('2022-02-02T00:00:00.000Z'),
					to: ['25', '62'],
				}),
				isViewed: false,
			},
			{
				notification: new NotificationBasic({
					id: '6',
					title: 'Title 6',
					body: 'Body 6',
					createdAt: new Date('2022-02-02T00:00:00.000Z'),
					to: ['25', '62'],
				}),
				isViewed: false,
			},
			{
				notification: new NotificationBasic({
					id: '7',
					title: 'Title 7',
					body: 'Body 7',
					createdAt: new Date('2022-02-02T00:00:00.000Z'),
					to: ['25', '62'],
				}),
				isViewed: false,
			},
			{
				notification: new NotificationBasic({
					id: '8',
					title: 'Title 8',
					body: 'Body 8',
					createdAt: new Date('2022-02-02T00:00:00.000Z'),
					to: ['25', '62'],
				}),
				isViewed: false,
			},
			{
				notification: new NotificationBasic({
					id: '9',
					title: 'Title 9',
					body: 'Body 9',
					createdAt: new Date('2022-02-02T00:00:00.000Z'),
					to: ['25', '62'],
				}),
				isViewed: false,
			},
			{
				notification: new NotificationBasic({
					id: '10',
					title: 'Title 10',
					body: 'Body 10',
					createdAt: new Date('2022-02-02T00:00:00.000Z'),
					to: ['25', '62'],
				}),
				isViewed: false,
			},
			{
				notification: new NotificationBasic({
					id: '11',
					title: 'Title 11',
					body: 'Body 11',
					createdAt: new Date('2022-02-02T00:00:00.000Z'),
					to: ['25', '62'],
				}),
				isViewed: false,
			},
			{
				notification: new NotificationBasic({
					id: '12',
					title: 'Title 12',
					body: 'Body 12',
					createdAt: new Date('2022-02-02T00:00:00.000Z'),
					to: ['25', '62'],
				}),
				isViewed: false,
			},
			{
				notification: new NotificationBasic({
					id: '13',
					title: 'Title 13',
					body: 'Body 13',
					createdAt: new Date('2022-02-02T00:00:00.000Z'),
					to: ['25', '62'],
				}),
				isViewed: false,
			},
			{
				notification: new NotificationBasic({
					id: '14',
					title: 'Title 14',
					body: 'Body 14',
					createdAt: new Date('2022-02-02T00:00:00.000Z'),
					to: ['25', '62'],
				}),
				isViewed: false,
			},
			{
				notification: new NotificationBasic({
					id: '15',
					title: 'Title 15',
					body: 'Body 15',
					createdAt: new Date('2022-02-02T00:00:00.000Z'),
					to: ['25', '62'],
				}),
				isViewed: false,
			},
			{
				notification: new NotificationBasic({
					id: '16',
					title: 'Title 16',
					body: 'Body 16',
					createdAt: new Date('2022-02-02T00:00:00.000Z'),
					to: ['25', '62'],
				}),
				isViewed: true,
			},
		];
	}
}

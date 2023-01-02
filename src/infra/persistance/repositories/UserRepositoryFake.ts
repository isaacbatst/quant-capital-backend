import {type User} from '../../../domain/entities/User';
import {type UserRepository} from './UserRepository';

export class UserRepositoryFake implements UserRepository {
	users: User[] = [];

	async getByEmail(email: string): Promise<User | undefined> {
		return this.users.find(user => user.getEmail().value === email);
	}

	async update(updatedUser: User): Promise<void> {
		const foundIndex = this.users.findIndex(user => user.getEmail().value === updatedUser.getEmail().value);

		if (foundIndex < 0) {
			throw new Error('USER_NOT_FOUND');
		}

		this.users[foundIndex] = updatedUser;
	}

	async save(user: User): Promise<void> {
		this.users.push(user);
	}
}

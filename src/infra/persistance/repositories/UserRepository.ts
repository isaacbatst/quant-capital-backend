import {type User} from '../../../domain/entities/User';

export type UserRepository = {
	getByEmail(email: string): Promise<User | undefined>;
	update(user: User): Promise<void>;
	save(user: User): Promise<void>;
};

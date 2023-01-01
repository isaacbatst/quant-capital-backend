import {type PasswordReset} from '../../../domain/entities/PasswordReset';

export type PasswordResetRepository = {
	save(passwordReset: PasswordReset): Promise<void>;
};

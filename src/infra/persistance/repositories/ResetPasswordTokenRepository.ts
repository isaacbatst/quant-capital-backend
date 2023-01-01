import {type PasswordReset} from '../../../domain/entities/PasswordReset';

export type ResetPasswordRepository = {
	save(ResetPasswordToken: PasswordReset): Promise<void>;
};

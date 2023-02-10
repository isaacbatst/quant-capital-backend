import {type PasswordResetRequest} from '../../../domain/entities/Account/PasswordResetRequest';

export type PasswordResetRequestRepository = {
	getByToken(token: string): Promise<PasswordResetRequest | undefined>;
	save(request: PasswordResetRequest): Promise<void>;
	update(request: PasswordResetRequest): Promise<void>;
};

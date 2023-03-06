/* eslint-disable @typescript-eslint/naming-convention */
import {type Request, type ErrorRequestHandler, type NextFunction, type Response} from 'express';
import {ZodError} from 'zod';

export class ErrorMiddleware {
	static handle(error: unknown, _req: Request, res: Response, next: NextFunction) {
		if (error instanceof Error) {
			const statusCode = ErrorMiddleware.errorStatusCodes[error.constructor.name];

			if (statusCode) {
				return res.status(statusCode).json({
					error: error.message,
				});
			}
		}

		if (error instanceof ZodError) {
			return res.status(400).json({
				error: error.issues[0].message,
			});
		}

		console.error(error);
		return res.status(500).end();
	}

	private static readonly errorStatusCodes: Record<string, number> = {
		ValidationError: 400,
		AuthError: 401,
		NotFoundError: 404,
		ConflictError: 409,
	};
}

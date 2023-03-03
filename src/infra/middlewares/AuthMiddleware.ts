import {type NextFunction, type Request, type Response} from 'express';

export class AuthMiddleware {
	static handle(req: Request, res: Response, next: NextFunction) {
		if (!req.headers.authorization) {
			return res.status(401).json({
				error: 'UNAUTHORIZED',
			});
		}

		next();
	}
}

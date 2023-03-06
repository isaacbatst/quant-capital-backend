import {type IncomingHttpHeaders} from 'http';

export class HeadersHelper {
	static getSessionToken(headers: IncomingHttpHeaders): string {
		return headers.authorization?.split(' ')[1] ?? '';
	}
}

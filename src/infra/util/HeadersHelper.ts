import {type IncomingHttpHeaders} from 'http';

export class HeadersHelper {
	static getAuthorizationHeader(headers: IncomingHttpHeaders): string {
		return headers.authorization?.split(' ')[1] ?? '';
	}
}

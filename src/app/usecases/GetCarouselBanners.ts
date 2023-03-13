import {type AuthService} from './AuthService';

type Output = {
	imageSource: string;
};

export class GetCarouselBanners {
	constructor(private readonly authService: AuthService, private readonly appUrl: string) {}

	async execute(sessionToken: string): Promise<Output[]> {
		await this.authService.getAccountBySessionToken(sessionToken);

		return [
			{imageSource: `${this.appUrl}/banner_1.jpg`},
			{imageSource: `${this.appUrl}/banner_1.jpg`},
			{imageSource: `${this.appUrl}/banner_1.jpg`},
			{imageSource: `${this.appUrl}/banner_1.jpg`},
			{imageSource: `${this.appUrl}/banner_1.jpg`},
		];
	}
}

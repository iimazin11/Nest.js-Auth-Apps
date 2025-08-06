import { Controller, Get, Query, Res } from '@nestjs/common';
import axios from 'axios';

@Controller('api/auth/github/callback')
export class GithubCallbackController {
    private clientID = process.env.GITHUB_CLIENT_ID;
    private clientSecret = process.env.GITHUB_SECRET;
    private redirectURI = process.env.GITHUB_REDIRECT_URI;
    @Get()
    async githubCallback(@Query('code') code: string, @Res() res) {
        const tokenRes = await axios.post(
            `https://github.com/login/oauth/access_token`,
            {
                client_id: this.clientID,
                client_secret: this.clientSecret,
                code,
                redirect_uri: this.redirectURI,
            },
            {
                headers: {
                    Accept: 'application/json',
                },
            }
        );

        const accessToken = tokenRes.data.access_token;

        

        res.cookie('github_token', accessToken, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 7,
        });

        return res.redirect("/api/me/github");
    }
}

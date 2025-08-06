import { Controller, Get, Query, Res } from '@nestjs/common';
import axios from 'axios';

@Controller('api/auth/google/callback')
export class GoogleCallbackController {
    @Get()
    async googleCallback(@Query('code') code: string, @Res() res) {
        const tokenData = await this.getTokens(code);


        res.cookie('google_token', tokenData.access_token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 7,
        });

        return res.redirect("/api/me/google");
    }

    async getTokens(code: string) {
        const res = await axios.post(
            'https://oauth2.googleapis.com/token',
            {
                code,
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_SECRET,
                redirect_uri: process.env.GITHUB_REDIRECT_URI,
                grant_type: 'authorization_code',
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );
        return res.data;
    }
}

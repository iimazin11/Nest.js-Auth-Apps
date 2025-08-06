import { Controller, Get, Query, Res } from '@nestjs/common';
import axios from 'axios';

@Controller('api/auth/google')
export class GoogleController {
    @Get()
    async getGoogleAuthURL(@Res() res) {
        const redirect_uri = process.env.GITHUB_REDIRECT_URI
        const client_id = process.env.GITHUB_CLIENT_ID;
        const scope = encodeURIComponent('openid email profile');

        return res.redirect(
            `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}`
        );
    }

    async getTokens(code: string) {
        const res = await axios.post(
            'https://oauth2.googleapis.com/token',
            {
                code,
                client_id: '1063564033887-d4h5t1du4ebg365supjtmqqvqmgt3e05.apps.googleusercontent.com',
                client_secret: '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',
                redirect_uri: 'http://localhost:3000/api/auth/google/callback',
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

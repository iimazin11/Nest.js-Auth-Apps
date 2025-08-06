import { Controller, Get, Query, Res, Req } from '@nestjs/common';
import axios from 'axios';

@Controller('api/me/google')
export class GoogleUserController {
    @Get()
    async getGoogleUser(@Req() req) {
        const token = req.cookies['google_token'];

        if (!token) {
            return { error: 'User not authenticated' };
        }

        const userInfo = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (!userInfo.ok) {
            return { error: 'Failed to fetch user info' };
        }

        const user = await userInfo.json();

        return { user };
    }
}

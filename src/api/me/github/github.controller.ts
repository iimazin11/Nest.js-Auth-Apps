import { Controller, Get, Query, Res, Req } from '@nestjs/common';
import axios from 'axios';

@Controller('api/me/github')
export class GithubUserController {
    @Get()
    async getGoogleUser(@Req() req) {
        const token = req.cookies['github_token'];

        if (!token) {
            return { error: 'User not authenticated' };
        }

        const userInfo = await fetch(`https://api.github.com/user`, {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/json',
            },
        });

        if (!userInfo.ok) {
            return { error: 'Failed to fetch user info' };
        }

        const user = await userInfo.json();

        return { user };
    }
}

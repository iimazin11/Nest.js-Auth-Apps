import { Controller, Get, Query, Res, Req } from '@nestjs/common';
import axios from 'axios';

@Controller('api/me/spotify')
export class SpotifyUserController {
      @Get()
    async getGoogleUser(@Req() req) {
        const token = req.cookies['spotify_token'];

        if (!token) {
            return { error: 'User not authenticated' };
        }

        const userInfo = await fetch('https://api.spotify.com/v1/me', {
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

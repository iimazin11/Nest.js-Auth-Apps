import { Controller, Get, Query, Res } from '@nestjs/common';
import axios from 'axios';

@Controller('api/auth/spotify/callback')
export class SpotifyCallbackController {
    private client_id = process.env.SPOTIFY_CLIENT_ID;
    private client_secret = process.env.SPOTIFY_SECRET;
    private redirect_uri = process.env.SPOTIFY_REDIRECT_URI;
    @Get()
    async callback(@Query('code') code: string, @Res() res) {
        const tokenRes = await axios.post(
            'https://accounts.spotify.com/api/token',
            new URLSearchParams({
                grant_type: 'authorization_code',
                code,
                redirect_uri: this.redirect_uri,
            }),
            {
                headers: {
                    Authorization:
                        'Basic ' +
                        Buffer.from(`${this.client_id}:${this.client_secret}`).toString('base64'),
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            },
        );

        const { access_token } = tokenRes.data;

         res.cookie('spotify_token', access_token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 7,
        });

        

       
        return res.redirect("/api/me/spotify");
    }
}

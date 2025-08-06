import { Controller, Get, Query, Res } from '@nestjs/common';
import axios from 'axios';

@Controller('api/auth/spotify')
export class SpotifyController {
    private client_id = process.env.SPOTIFY_CLIENT_ID;
    private redirect_uri = process.env.SPOTIFY_REDIRECT_URI;
    @Get()
    login(@Res() res) {
        const scope = 'user-read-email user-read-private';
        const redirect = `https://accounts.spotify.com/authorize?client_id=${this.client_id}&response_type=code&redirect_uri=${encodeURIComponent(this.redirect_uri)}&scope=${encodeURIComponent(scope)}`;
        return res.redirect(redirect);
    }
}
//b38d99fae94246d7a78ea6930af6864e
//17c74f0bd6d743eabbe3bf957c4235b9
import { Controller, Get, Query, Res } from '@nestjs/common';

@Controller('api/auth/discord/callback')
export class CallbackController {
  @Get()
  async handleDiscordCallback(@Query('code') code: string, @Res() res) {
    const client_id = process.env.DISCORD_CLIENT_ID;
    const client_secret = process.env.DISCORD_SECRET;
    const redirect_uri = process.env.DISCORD_REDIRECT_URI;

    const tokenData = new URLSearchParams({
      client_id,
      client_secret,
      grant_type: 'authorization_code',
      code,
      redirect_uri,
    });

    const tokenRes = await fetch('https://discord.com/api/oauth2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: tokenData.toString(),
    });

    const tokenJson = await tokenRes.json();

    if (!tokenJson.access_token) {
      return res.status(400).send('Token exchange failed');
    }

    res.cookie('discord_token', tokenJson.access_token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 *7, 
    });

    return res.redirect("/api/me/discord");
  }
}

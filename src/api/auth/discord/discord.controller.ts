import { Controller, Get, Query, Res } from '@nestjs/common';

@Controller('api/auth/discord')
export class DiscordController {
  @Get()
  redirectToDiscord(@Res() res) {
    const client_id = process.env.DISCORD_CLIENT_ID;
    const redirect_uri = encodeURIComponent(process.env.DISCORD_REDIRECT_URI);
    const scope = 'identify email guilds';

    const discordAuthUrl = `https://discord.com/oauth2/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code&scope=${scope}`;

    return res.redirect(discordAuthUrl);
  }
}

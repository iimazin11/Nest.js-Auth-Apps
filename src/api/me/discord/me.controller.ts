import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('api/me/discord')
export class MeController {
    @Get()
    async getDiscordUser(@Req() req) {
        const token = req.cookies['discord_token'];

        if (!token) {
            return { error: 'User not authenticated' };
        }

        const userRes = await fetch('https://discord.com/api/users/@me', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (!userRes.ok) {
            return { error: 'Failed to fetch user info' };
        }


        const guildRes = await fetch('https://discord.com/api/users/@me/guilds', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (!guildRes.ok) {
            return { error: 'Failed to fetch user guilds' };
        }

        const user = await userRes.json();
        const guilds = await guildRes.json();

        let formattedGuilds = []

        guilds.forEach( async (g) => {
            let data = {
                name: g.name,
                id: g.id
            }
            formattedGuilds.push(data)
        })
        return { user, guilds: formattedGuilds };
    }
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DiscordController } from './api/auth/discord/discord.controller';
import { CallbackController } from './api/auth/discord/callback/callback.controller';
import { MeController } from './api/me/discord/me.controller';
import { GoogleController } from './api/auth/google/google.controller';
import { GoogleCallbackController } from './api/auth/google/callback/callback.controller';
import { GoogleUserController } from './api/me/google/google.controller';
import { GithubController } from './api/auth/github/github.controller';
import { GithubCallbackController } from './api/auth/github/callback/callback.controller';
import { GithubUserController } from './api/me/github/github.controller';
import { SpotifyController } from './api/auth/spotify/spotify.controller';
import { SpotifyCallbackController } from './api/auth/spotify/callback/callback.controller';
import { SpotifyUserController } from './api/me/spotify/spotify.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
    })
  ],
  controllers: [AppController, SpotifyUserController, DiscordController, CallbackController, SpotifyCallbackController, GoogleUserController, GoogleCallbackController, GithubCallbackController, MeController, GoogleController, GithubUserController, GithubController, SpotifyController],
  providers: [AppService],
})
export class AppModule {}

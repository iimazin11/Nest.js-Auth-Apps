import { Controller, Get, Query, Res } from '@nestjs/common';

@Controller('api/auth/github')
export class GithubController {
    private clientID = process.env.GITHUB_CLIENT_ID;
    private redirectURI = process.env.GITHUB_REDIRECT_URI;
    @Get()
    async redirectToGitHub(@Res() res) {
        const githubAuthURL = `https://github.com/login/oauth/authorize?client_id=${this.clientID}&redirect_uri=${this.redirectURI}&scope=read:user user:email`;
        return res.redirect(githubAuthURL);
    }
}

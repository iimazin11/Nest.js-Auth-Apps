


# OAuth Login API using NestJS (TypeScript)

مشروع Nest.js يدعم تسجيل الدخول عبر OAuth من المنصات التالية:

- 🎮 Discord
- 🐙 GitHub
- 🔍 Google
- 🎵 Spotify

---

## 👨‍💻 المطور

- **الاسم**: Mazen Mahmoud  
- **Discord ID**: `618078478755037185`

---

## 📦 التثبيت والتشغيل

```bash
# 1. تثبيت التبعيات
npm install

# 2. تشغيل المشروع
npm run start:dev
````

---

## 🔐 إعداد المتغيرات (Environment Variables)

أنشئ ملف `.env` في جذر المشروع، وضع فيه القيم التالية:

```env
# Discord
DISCORD_CLIENT_ID=your_discord_client_id
DISCORD_SECRET=your_discord_client_secret
DISCORD_REDIRECT_URI=http://localhost:3000/api/auth/discord/callback

# GitHub
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret
GITHUB_REDIRECT_URI=http://localhost:3000/api/auth/github/callback

# Google
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_SECRET=your_google_client_secret
GOOGLE_REDIRECT_URI=http://localhost:3000/api/auth/google/callback

# Spotify ⚠️ يجب استخدام رابط رسمي يبدأ بـ https:// وليس localhost
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_SECRET=your_spotify_client_secret
SPOTIFY_REDIRECT_URI=https://yourdomain.com/api/auth/spotify/callback
```

---

## 🧭 خطوات الحصول على مفاتيح كل خدمة

### 1. 🎮 Discord

* افتح: [https://discord.com/developers/applications](https://discord.com/developers/applications)
* أنشئ تطبيق جديد
* فعّل OAuth2 > Redirects:

  ```
  http://localhost:3000/api/auth/discord/callback
  ```
* انسخ الـ `CLIENT_ID` و `CLIENT_SECRET`

---

### 2. 🐙 GitHub

* افتح: [https://github.com/settings/developers](https://github.com/settings/developers)
* أنشئ OAuth App
* ضع:

  * Homepage: `http://localhost:3000`
  * Callback URL: `http://localhost:3000/api/auth/github/callback`
* احصل على `CLIENT_ID` و `CLIENT_SECRET`

---

### 3. 🔍 Google

* افتح: [https://console.cloud.google.com/](https://console.cloud.google.com/)
* أنشئ مشروع جديد
* فعّل OAuth2.0 من APIs & Services > Credentials
* حدد:

  * نوع التطبيق: Web
  * Authorized redirect URIs:

    ```
    http://localhost:3000/api/auth/google/callback
    ```
* انسخ `CLIENT_ID` و `CLIENT_SECRET`

---

### 4. 🎵 Spotify

> ⚠️ **تنبيه مهم**: Spotify لا تقبل `http://localhost` في redirect URI إلا في بعض الحالات المحدودة.
> يجب استخدام رابط رسمي حقيقي يبدأ بـ `https://` مثل ngrok أو دومين فعلي.

* افتح: [https://developer.spotify.com/dashboard/](https://developer.spotify.com/dashboard/)
* أنشئ تطبيق جديد
* أضف Redirect URI:

  ```
  https://yourdomain.com/api/auth/spotify/callback
  ```
* انسخ `CLIENT_ID` و `CLIENT_SECRET`

---

## 🧪 روابط تسجيل الدخول

| الخدمة  | رابط الدخول         |
| ------- | ------------------- |
| Discord | `/api/auth/discord` |
| GitHub  | `/api/auth/github`  |
| Google  | `/api/auth/google`  |
| Spotify | `/api/auth/spotify` |



---


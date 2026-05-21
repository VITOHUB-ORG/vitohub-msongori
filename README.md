# Msongori Website

Vue 3 + Vite frontend with an Express contact-form backend.

## Run With Docker

Create your local environment file:

```sh
cp .env.example .env
```

Edit `.env` with the SMTP credentials used to send contact-form emails, then run:

```sh
docker compose up --build
```

The site will be available at `http://localhost:5000`.

If your Docker installation does not include Compose:

```sh
docker build -t vitohub-msongori .
docker run --env-file .env -p 5000:5000 vitohub-msongori
```

## Environment Variables

- `APP_PORT`: host port used by Docker Compose. Defaults to `5000`.
- `PORT`: internal Express port. Defaults to `5000`.
- `HOST`: bind address used by Express. Defaults to `0.0.0.0`.
- `SMTP_HOST`: SMTP server hostname. Defaults to `smtp.gmail.com`.
- `SMTP_PORT`: SMTP server port. Defaults to `587`.
- `SMTP_SECURE`: set to `true` for SMTPS, otherwise `false`.
- `SMTP_USER`: SMTP username.
- `SMTP_PASS`: SMTP password or app password.
- `MAIL_FROM`: sender address shown on outgoing emails.
- `MAIL_TO`: recipient address for contact-form messages.
- `CORS_ORIGIN`: optional allowed origin for separate frontend/backend deployments.
- `VITE_API_BASE_URL`: optional frontend API base URL for separate frontend/backend deployments.

## Local Development

Install and run the frontend:

```sh
npm install
npm run dev
```

Install and run the backend in another terminal:

```sh
cd backend
npm install
npm start
```

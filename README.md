# Pro-plitka

Локальный прототип корпоративного сайта Pro-plitka на Astro + TypeScript + Tailwind CSS, подготовленный под Cloudflare Pages и Pages Functions.

## Команды

```bash
npm install
npm run dev
npm run build
```

## Структура

- `src/data/` — редактируемые тексты, услуги, портфолио, кейсы, FAQ.
- `src/components/` — небольшие Astro-компоненты блоков.
- `src/pages/` — страницы `/`, `/services`, `/portfolio`, `/cases`, `/contacts`.
- `functions/api/contact.ts` — Cloudflare Pages Function для заявки в Telegram.
- `public/docs/` и `public/files/` — PDF-заглушки, готовые к замене реальными файлами.

## Секреты

Не коммитить `.env` и `.dev.vars`. Для формы нужны переменные окружения:

- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`
- `SITE_NAME`

В репозитории есть только `.env.example` и `.dev.vars.example`.

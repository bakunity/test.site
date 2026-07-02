# SITECODER TASK CONTRACT — Pro-plitka

## Роль
Ты — профиль `sitecoder`, кодер сайта. Главный оркестратор — Лысый/default.

## Источник ТЗ
Прочитай полное ТЗ:

- `docs/_input/Техническое_задание_Pro_plitka.txt`
- оригинал DOCX: `docs/_input/Техническое_задание_Pro_plitka.docx`

## Цель первого этапа
Собрать первый рабочий локальный прототип сайта Pro-plitka из ТЗ.

Стек:

- Astro
- TypeScript
- Tailwind CSS
- Cloudflare Pages compatible output
- Cloudflare Pages Function `/api/contact` для заявок в Telegram

## Обязательные страницы

- `/`
- `/services`
- `/portfolio`
- `/cases`
- `/contacts`

## Обязательные блоки

- Header с мобильным меню
- Hero
- краткое описание компании
- услуги карточками
- преимущества
- процесс работы
- портфолио-галерея
- PDF-блок
- кейсы/отзывы
- FAQ
- форма заявки
- Footer

## Дизайн

Dark Premium: Linear + Stripe.
Тёмный графитовый фон, молочный текст, аккуратные карточки, premium gradients, строительная тематика без дешёвого ремонтного шаблона.
Responsive: mobile/tablet/desktop.

## Контент

Используй временные тексты из ТЗ. Контент вынеси в `src/data` или `src/content`, не хардкодь всё внутри компонентов.

## PDF и файлы

Создай места/заглушки:

- `public/docs/presentation.pdf`
- `public/docs/portfolio.pdf`
- `public/files/price.pdf`

Если реальных PDF нет, сделай понятные placeholder-файлы или README в этих папках, но ссылки в UI должны быть подготовлены.

## Форма

Endpoint: `POST /api/contact`

Env vars:

- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`
- `SITE_NAME=Pro-plitka`

Токены не коммитить. Добавь `.env.example`, `.dev.vars.example`, `.gitignore`.
Форма должна иметь honeypot, validation, loading/success/error states.

## SEO/analytics

Добавь базовые title/description/OG, robots/sitemap если просто.
Добавь компонент analytics с местом под Cloudflare Web Analytics и опциональную Метрику через env/public config, без секретов.

## Что НЕ делать

- Не деплоить без отдельной команды оркестратора.
- Не создавать GitHub repo без доступа/команды.
- Не просить токены в открытом виде.
- Не использовать VPS, CMS, database, CRM.

## Проверка

Обязательно:

1. Установить зависимости только для проекта.
2. Собрать проект: `npm run build`.
3. Если build падает — исправить.
4. Дать отчёт в `docs/_reports/sitecoder-initial-report.md`:
   - что создано;
   - какие команды прошли;
   - что не сделано из-за отсутствия доступов/материалов;
   - что нужно от пользователя для деплоя.

## Рабочая директория

`/data/data/com.termux/files/home/projects/pro-plitka`

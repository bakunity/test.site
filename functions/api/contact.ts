type Env = {
  TELEGRAM_BOT_TOKEN?: string;
  TELEGRAM_CHAT_ID?: string;
  SITE_NAME?: string;
};

type ContactPayload = {
  name?: string;
  phone?: string;
  messenger?: string;
  message?: string;
  company?: string;
  page?: string;
  source?: string;
  service?: string;
  utm?: string;
  time?: string;
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });

const clean = (value: unknown, max = 800) => String(value ?? '').trim().slice(0, max);

export const onRequestPost = async ({ request, env }: { request: Request; env: Env }) => {
  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return json({ message: 'Некорректный JSON.' }, 400);
  }

  if (clean(payload.company)) {
    return json({ ok: true });
  }

  const name = clean(payload.name, 120);
  const phone = clean(payload.phone, 80);
  const messenger = clean(payload.messenger, 120);
  const message = clean(payload.message, 1200);
  const page = clean(payload.page, 200) || '/';
  const source = clean(payload.source, 120) || 'site';
  const service = clean(payload.service, 200);
  const utm = clean(payload.utm, 500);
  const time = clean(payload.time, 80) || new Date().toISOString();
  const siteName = env.SITE_NAME || 'Pro-plitka';

  if (!name || !phone) {
    return json({ message: 'Укажите имя и телефон.' }, 400);
  }

  if (!env.TELEGRAM_BOT_TOKEN || !env.TELEGRAM_CHAT_ID) {
    return json({ message: 'Endpoint настроен, но переменные Telegram не заданы.' }, 503);
  }

  const text = [
    `🟢 Новая заявка с сайта ${siteName}`,
    '',
    `Имя: ${name}`,
    `Телефон: ${phone}`,
    `Telegram / WhatsApp: ${messenger || '—'}`,
    `Сообщение: ${message || '—'}`,
    '',
    `Страница: ${page}`,
    `Источник: ${source}`,
    `UTM: ${utm || '—'}`,
    `Выбранная услуга: ${service || '—'}`,
    `Время: ${time}`,
  ].join('\n');

  const telegramResponse = await fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ chat_id: env.TELEGRAM_CHAT_ID, text }),
  });

  if (!telegramResponse.ok) {
    return json({ message: 'Telegram API вернул ошибку.' }, 502);
  }

  return json({ ok: true });
};

export const onRequest = () => json({ message: 'Method Not Allowed' }, 405);

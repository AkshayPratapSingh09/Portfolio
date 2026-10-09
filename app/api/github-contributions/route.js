import { NextResponse } from 'next/server';
import cachedData from '@/public/github-contributions-cache.json';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export async function GET() {
  const username = 'AkshayPratapSingh09';

  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
      {
        headers: {
          'User-Agent': 'Akshay-Portfolio-Contributions',
        },
        cache: 'no-store',
      }
    );

    if (res.ok) {
      const data = await res.json();
      return NextResponse.json({
        success: true,
        source: 'live',
        ...data,
      });
    }
  } catch (err) {
    console.error('Error fetching live GitHub contributions:', err?.message || err);
  }

  // Fallback to bundled cache if external API fails or rate-limits
  if (cachedData) {
    return NextResponse.json({
      success: true,
      source: 'cached',
      ...cachedData,
    });
  }

  return NextResponse.json(
    { success: false, error: 'Failed to fetch contribution data' },
    { status: 500 }
  );
}

import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

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
    console.error('Error fetching live GitHub contributions:', err.message, err.cause);
  }

  // Fallback to static cache if external API fails or rate-limits
  try {
    const cachePath = path.join(
      process.cwd(),
      'public',
      'github-contributions-cache.json'
    );
    if (fs.existsSync(cachePath)) {
      const fileContent = fs.readFileSync(cachePath, 'utf8');
      const cachedData = JSON.parse(fileContent);
      return NextResponse.json({
        success: true,
        source: 'cached',
        ...cachedData,
      });
    }
  } catch (cacheErr) {
    console.error('Error loading cached contributions:', cacheErr);
  }

  return NextResponse.json(
    { success: false, error: 'Failed to fetch contribution data' },
    { status: 500 }
  );
}

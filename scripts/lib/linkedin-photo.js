import { createHash } from 'node:crypto';

export const USER_AGENT =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36';

export const PROFILE_PHOTO_STORE = 'profile-photo';
export const PROFILE_PHOTO_IMAGE_KEY = 'image';
export const PROFILE_PHOTO_HASH_KEY = 'hash';

function decodeHtmlEntities(value) {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

export function hashBuffer(buffer) {
  return createHash('sha256').update(buffer).digest('hex');
}

export function resolveProfileUrl(profileUrl) {
  if (process.env.LINKEDIN_PROFILE_URL?.trim()) {
    return process.env.LINKEDIN_PROFILE_URL.trim();
  }
  if (profileUrl?.trim()) {
    return profileUrl.trim();
  }
  throw new Error('LinkedIn URL not found in portfolioData or LINKEDIN_PROFILE_URL');
}

export function extractOgImage(html) {
  const patterns = [
    /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i,
    /<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i,
    /<meta[^>]+name=["']og:image["'][^>]+content=["']([^"']+)["']/i,
    /<meta[^>]+content=["']([^"']+)["'][^>]+name=["']og:image["']/i,
    /<meta[^>]+property=["']twitter:image["'][^>]+content=["']([^"']+)["']/i,
  ];

  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match?.[1]) return decodeHtmlEntities(match[1]);
  }

  return null;
}

export async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      'User-Agent': USER_AGENT,
      Accept: 'text/html,application/xhtml+xml',
      'Accept-Language': 'en-US,en;q=0.9',
    },
    redirect: 'follow',
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status} fetching ${url}`);
  }

  return response.text();
}

export async function fetchImageBuffer(url) {
  const response = await fetch(url, {
    headers: {
      'User-Agent': USER_AGENT,
      Accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
    },
    redirect: 'follow',
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status} downloading image`);
  }

  const contentType = response.headers.get('content-type') ?? '';
  if (!contentType.startsWith('image/')) {
    throw new Error(`Unexpected content-type: ${contentType || 'unknown'}`);
  }

  return {
    buffer: Buffer.from(await response.arrayBuffer()),
    contentType,
  };
}

export async function resolveImageUrl(profileUrl) {
  if (process.env.LINKEDIN_IMAGE_URL?.trim()) {
    return process.env.LINKEDIN_IMAGE_URL.trim();
  }

  const html = await fetchText(profileUrl);
  const imageUrl = extractOgImage(html);

  if (!imageUrl) {
    throw new Error(
      'Could not find og:image on LinkedIn profile. Set LINKEDIN_IMAGE_URL as a fallback.'
    );
  }

  return imageUrl;
}

export async function downloadLinkedInPhoto(profileUrl) {
  const resolvedProfileUrl = resolveProfileUrl(profileUrl);
  const imageUrl = await resolveImageUrl(resolvedProfileUrl);
  const { buffer, contentType } = await fetchImageBuffer(imageUrl);

  return {
    buffer,
    contentType,
    hash: hashBuffer(buffer),
    imageUrl,
    profileUrl: resolvedProfileUrl,
  };
}

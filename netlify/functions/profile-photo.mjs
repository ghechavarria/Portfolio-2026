import { getStore } from '@netlify/blobs';
import {
  PROFILE_PHOTO_IMAGE_KEY,
  PROFILE_PHOTO_STORE,
} from '../../scripts/lib/linkedin-photo.js';

export default async () => {
  const store = getStore({ name: PROFILE_PHOTO_STORE, consistency: 'strong' });
  const image = await store.get(PROFILE_PHOTO_IMAGE_KEY, { type: 'arrayBuffer' });

  if (!image) {
    return new Response('Profile photo not found', { status: 404 });
  }

  const metadata = await store.getMetadata(PROFILE_PHOTO_IMAGE_KEY);
  const contentType = metadata?.contentType ?? 'image/jpeg';

  return new Response(image, {
    status: 200,
    headers: {
      'Content-Type': contentType,
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
};

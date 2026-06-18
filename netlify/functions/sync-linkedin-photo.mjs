import { getStore } from '@netlify/blobs';
import { site } from '../../src/data/portfolioData.js';
import {
  downloadLinkedInPhoto,
  PROFILE_PHOTO_HASH_KEY,
  PROFILE_PHOTO_IMAGE_KEY,
  PROFILE_PHOTO_STORE,
} from '../../scripts/lib/linkedin-photo.js';

export default async () => {
  const store = getStore({ name: PROFILE_PHOTO_STORE, consistency: 'strong' });
  const existingHash = await store.get(PROFILE_PHOTO_HASH_KEY, { type: 'text' });
  const { buffer, contentType, hash, imageUrl } = await downloadLinkedInPhoto(site.linkedin);

  if (existingHash === hash) {
    return new Response(
      JSON.stringify({ updated: false, hash }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  }

  await store.set(PROFILE_PHOTO_IMAGE_KEY, buffer, {
    metadata: { contentType },
  });
  await store.set(PROFILE_PHOTO_HASH_KEY, hash);

  return new Response(
    JSON.stringify({ updated: true, hash, imageUrl }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
};

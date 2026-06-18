import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { downloadLinkedInPhoto, hashBuffer } from './lib/linkedin-photo.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const profilePath = join(root, 'public', 'assets', 'profile.jpg');
const portfolioDataPath = join(root, 'src', 'data', 'portfolioData.js');

async function readLinkedInProfileUrl() {
  const source = await readFile(portfolioDataPath, 'utf8');
  const match = source.match(/linkedin:\s*['"]([^'"]+)['"]/);
  if (!match) {
    throw new Error('LinkedIn URL not found in portfolioData.js');
  }
  return match[1];
}

async function readExistingHash() {
  try {
    return hashBuffer(await readFile(profilePath));
  } catch {
    return null;
  }
}

export async function syncLinkedInPhoto() {
  const profileUrl = await readLinkedInProfileUrl();
  const { buffer, imageUrl } = await downloadLinkedInPhoto(profileUrl);
  console.log(`Resolved image URL: ${imageUrl}`);

  const incomingHash = hashBuffer(buffer);
  const existingHash = await readExistingHash();

  if (existingHash === incomingHash) {
    console.log('Profile photo unchanged — no update needed.');
    return { updated: false, path: profilePath };
  }

  await mkdir(dirname(profilePath), { recursive: true });
  await writeFile(profilePath, buffer);
  console.log(`Profile photo updated at ${profilePath}`);
  return { updated: true, path: profilePath };
}

const isDirectRun =
  process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;

if (isDirectRun) {
  syncLinkedInPhoto().catch((error) => {
    console.error(`LinkedIn photo sync failed: ${error.message}`);
    if (error.cause) console.error(error.cause);
    process.exitCode = 1;
  });
}

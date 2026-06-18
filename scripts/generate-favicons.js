import { readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import toIco from 'to-ico';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');
const svgPath = join(publicDir, 'favicon.svg');

async function rasterize(size) {
  const svg = await readFile(svgPath);
  return sharp(svg).resize(size, size).png().toBuffer();
}

async function main() {
  await writeFile(join(publicDir, 'favicon-32x32.png'), await rasterize(32));
  await writeFile(join(publicDir, 'apple-touch-icon.png'), await rasterize(180));
  await writeFile(
    join(publicDir, 'favicon.ico'),
    await toIco(await Promise.all([16, 32, 48].map(rasterize))),
  );
  console.log('Wrote favicon.ico, favicon-32x32.png, apple-touch-icon.png');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

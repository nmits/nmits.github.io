import sharp from 'sharp';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateFavicon() {
  try {
    await sharp(path.join(__dirname, '../public/favicon.svg'))
      .resize(32, 32)
      .toFile(path.join(__dirname, '../public/favicon.ico'));
    console.log('Favicon generated successfully!');
  } catch (error) {
    console.error('Error generating favicon:', error);
  }
}

generateFavicon();

import sharp from 'sharp'
import { readdir } from 'node:fs/promises'
import path from 'node:path'

const inputDir = './public'

async function convertToWebP(dir) {
  let entries
  try {
    entries = await readdir(dir, { withFileTypes: true })
  } catch {
    console.warn(`Skipping directory (not found): ${dir}`)
    return
  }

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      await convertToWebP(fullPath)
    } else if (/\.(jpe?g|png)$/i.test(entry.name)) {
      const outPath = fullPath.replace(/\.(jpe?g|png)$/i, '.webp')
      await sharp(fullPath).webp({ quality: 85 }).toFile(outPath)
      console.log(`✓ ${fullPath} → ${outPath}`)
    }
  }
}

convertToWebP(inputDir)
  .then(() => console.log('Done converting images to WebP.'))
  .catch(console.error)

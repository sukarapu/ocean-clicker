import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

const src = './src/assets/ocean-big.svg'
const outDir = './public/icons'
const bg = { r: 235, g: 235, b: 235, alpha: 1 }

fs.mkdirSync(outDir, { recursive: true })

const icons = [
  { file: 'manifest-icon-192.maskable.png', size: 192 },
  { file: 'manifest-icon-512.maskable.png', size: 512 },
  { file: 'apple-icon-180.png',             size: 180 },
  { file: 'apple-icon-167.png',             size: 167 },
  { file: 'apple-icon-152.png',             size: 152 },
  { file: 'apple-icon-120.png',             size: 120 },
  { file: 'favicon.png',                    size: 32  },
]

for (const { file, size } of icons) {
  await sharp({
    create: { width: size, height: size, channels: 4,
               background: bg }
  })
    .composite([{
      input: await sharp(src).resize(Math.round(size * 0.8),
                                     Math.round(size * 0.8)).toBuffer(),
      gravity: 'center'
    }])
    .png()
    .toFile(path.join(outDir, file))

  console.log(`✓ ${file} (${size}x${size})`)
}

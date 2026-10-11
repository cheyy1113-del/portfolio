import fs from 'fs';
import path from 'path';

const assetsToDownload = [
  {
    url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
    file: 'hayath_hero.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
    file: 'hayath_transform.jpg'
  },
  {
    url: 'https://noble-plan.vercel.app/assets/hero-bg-fkeNwjQD.jpg',
    file: 'noble_hero.jpg'
  },
  {
    url: 'https://noble-plan.vercel.app/assets/service-retirement-CR6-0o4c.jpg',
    file: 'noble_service.jpg'
  }
];

async function downloadAll() {
  const destDir = path.resolve('public/images/projects');
  for (const item of assetsToDownload) {
    try {
      const res = await fetch(item.url);
      if (res.ok) {
        const buffer = await res.arrayBuffer();
        fs.writeFileSync(path.join(destDir, item.file), Buffer.from(buffer));
        console.log(`Downloaded ${item.file}`);
      } else {
        console.warn(`Failed ${item.file}: ${res.status}`);
      }
    } catch (err) {
      console.error(`Error downloading ${item.file}:`, err.message);
    }
  }
}

downloadAll();

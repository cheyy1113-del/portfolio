import fs from 'fs';
import path from 'path';

const distHtml = fs.readFileSync('dist/index.html', 'utf-8');
const jsFiles = fs.readdirSync('dist/assets').filter(f => f.endsWith('.js'));
let jsContent = '';
for (const file of jsFiles) {
  jsContent += fs.readFileSync(path.join('dist/assets', file), 'utf-8');
}

const checks = [
  { name: 'Instagram Profile', match: 'https://www.instagram.com/bhyrichaitanya/' },
  { name: 'Threads Profile', match: 'https://www.threads.net/@bhyrichaitanya' },
  { name: 'LinkedIn Profile', match: 'https://www.linkedin.com/in/bhyri-chaitanya-463094247' },
  { name: 'X (Twitter) Profile', match: 'https://x.com/saisriniva8095' },
  { name: 'Email Address', match: 'bhyrichaitanya6543@gmail.com' },
  { name: 'Phone Raw String', match: '+919346569943' },
  { name: 'WhatsApp Raw String', match: '919346569943' },
  { name: 'WhatsApp Domain', match: 'wa.me' },
  { name: 'Tel Protocol', match: 'tel:' },
];

console.log('--- VERIFYING SOCIAL PROFILES & CONTACT LINKS IN PRODUCTION BUNDLE ---');
let allPassed = true;
for (const check of checks) {
  const found = jsContent.includes(check.match) || distHtml.includes(check.match);
  if (found) {
    console.log(`[PASS] ${check.name}: "${check.match}"`);
  } else {
    console.error(`[FAIL] Missing ${check.name}: "${check.match}"`);
    allPassed = false;
  }
}

if (allPassed) {
  console.log('\n>>> ALL 9 SOCIAL & CONTACT VERIFICATIONS PASSED! <<<');
} else {
  process.exit(1);
}

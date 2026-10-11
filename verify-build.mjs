import fs from 'fs';
import path from 'path';

const distHtml = fs.readFileSync('dist/index.html', 'utf-8');
const jsFiles = fs.readdirSync('dist/assets').filter(f => f.endsWith('.js'));
let jsContent = '';
for (const file of jsFiles) {
  jsContent += fs.readFileSync(path.join('dist/assets', file), 'utf-8');
}

const requiredPhrases = [
  'INDEPENDENT WEB DESIGN & DEVELOPMENT',
  'Your Business',
  'Deserves More Than',
  'Just a Website',
  'I design and develop modern, conversion-focused websites',
  'Explore My Work',
  'Start a Project',
  // Projects
  'https://onyxhyderabad.com',
  'https://dental-clinic-demo-henna.vercel.app',
  'https://hayath-fitness.vercel.app',
  'https://v0-ai-automation-website-rouge-six.vercel.app',
  'https://noble-plan.vercel.app',
  'Onyx Hyderabad',
  'Dr. Sridhar Dental Care',
  'Hayath Fitness',
  'NexusAI Automation',
  'Personal Financial Gurus',
  // Business Problems
  'Your Website Could Be Costing You Opportunities',
  // Services
  'Everything You Need to Build a Stronger Online Presence',
  'Website Design & Development',
  'Landing Pages & Lead Generation',
  'AI Automation & Business Systems',
  // Process
  'From Idea to Live Website',
  // Conversion Section
  'Stop Letting Your Online Presence Hold Your Business Back',
  // About
  'Building Digital Experiences With Business in Mind',
  'independent website developer and AI automation enthusiast',
  'thoughtful website design, clear communication, and practical automation solutions',
  'do more than simply look good',
  // Footer
  'B. Chaitanya',
  'cheyy1113@gmail.com',
  'All rights reserved',
];

console.log('--- VERIFYING REQUIRED CONTENT & LIVE LINKS ---');
let allPassed = true;
for (const phrase of requiredPhrases) {
  const foundInHtml = distHtml.includes(phrase);
  const foundInJs = jsContent.includes(phrase);
  if (foundInHtml || foundInJs) {
    console.log(`[PASS] "${phrase}"`);
  } else {
    console.error(`[FAIL] Missing: "${phrase}"`);
    allPassed = false;
  }
}

if (allPassed) {
  console.log('\n>>> ALL REQUIRED CONTENT & URLS VERIFIED IN PRODUCTION BUNDLE! <<<');
} else {
  console.error('\n>>> SOME CHECKS FAILED! <<<');
  process.exit(1);
}

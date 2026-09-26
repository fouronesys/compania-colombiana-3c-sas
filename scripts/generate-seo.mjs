import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const outputDir = process.argv[2];
if (!outputDir) throw new Error('Expected the Vite output directory.');

const configuredUrl = process.env.PUBLIC_SITE_URL;
if (!configuredUrl) {
  console.info('PUBLIC_SITE_URL not set; omitting canonical URL and sitemap.');
  process.exit(0);
}

let siteUrl;
try {
  siteUrl = new URL(configuredUrl);
} catch {
  throw new Error('PUBLIC_SITE_URL must be a complete HTTPS URL.');
}

const basePath = process.env.BASE_PATH || '/';
if (
  siteUrl.protocol !== 'https:' ||
  siteUrl.username ||
  siteUrl.password ||
  siteUrl.search ||
  siteUrl.hash ||
  !configuredUrl.endsWith('/') ||
  !basePath.startsWith('/') ||
  !basePath.endsWith('/') ||
  siteUrl.pathname !== basePath
) {
  throw new Error(
    'PUBLIC_SITE_URL must be an HTTPS homepage URL ending in /, with a path matching BASE_PATH and no query or fragment.',
  );
}

const home = siteUrl.href;
const image = new URL('images/social-preview.jpg', siteUrl).href;
const sitemap = new URL('sitemap.xml', siteUrl).href;
const htmlPath = path.join(outputDir, 'index.html');
let html = await readFile(htmlPath, 'utf8');
const imageTag = '<meta property="og:image" content="./images/social-preview.jpg" />';
const twitterImageTag = '<meta name="twitter:image" content="./images/social-preview.jpg" />';
if (!html.includes(imageTag) || !html.includes(twitterImageTag) || !html.includes('</head>')) {
  throw new Error('Expected SEO tags not found in the generated index.html.');
}
html = html.replace(imageTag, `<meta property="og:image" content="${image}" />`);
html = html.replace(twitterImageTag, `<meta name="twitter:image" content="${image}" />`);
html = html.replace(
  '</head>',
  `  <link rel="canonical" href="${home}" />\n    <meta property="og:url" content="${home}" />\n  </head>`,
);
await writeFile(htmlPath, html);
await writeFile(
  path.join(outputDir, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${home}</loc></url>\n</urlset>\n`,
);
await writeFile(
  path.join(outputDir, 'robots.txt'),
  `User-agent: *\nAllow: /\nSitemap: ${sitemap}\n`,
);
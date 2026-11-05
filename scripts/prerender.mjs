import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const distSsrDir = path.resolve(rootDir, 'dist-ssr');
const indexPath = path.resolve(distDir, 'index.html');
const serverEntryPath = path.resolve(distSsrDir, 'entry-server.js');

async function prerender() {
  console.log('⚡ Prerendering static HTML for production...');

  if (!fs.existsSync(indexPath)) {
    throw new Error(`dist/index.html not found at ${indexPath}. Run client build first.`);
  }

  if (!fs.existsSync(serverEntryPath)) {
    throw new Error(`SSR server bundle not found at ${serverEntryPath}. Run SSR build first.`);
  }

  const template = fs.readFileSync(indexPath, 'utf-8');
  const { render } = await import(pathToFileURL(serverEntryPath).href);
  const { html: appHtml } = await render();

  const rendered = template.replace(
    '<div id="app"></div>',
    `<div id="app">${appHtml}</div>`
  );

  fs.writeFileSync(indexPath, rendered, 'utf-8');
  console.log(`✅ Successfully prerendered dist/index.html (${(rendered.length / 1024).toFixed(1)} KB static markup)`);

  // Clean up the temporary server bundle so dist remains clean
  fs.rmSync(distSsrDir, { recursive: true, force: true });
}

prerender().catch((err) => {
  console.error('❌ Prerender failed:', err);
  process.exit(1);
});

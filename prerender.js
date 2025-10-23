import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);
const template = fs.readFileSync(toAbsolute('index.html'), 'utf-8');
const {render} = await import('./dist/server/entry-server.js');
const manifest = JSON.parse(
  fs.readFileSync(toAbsolute('dist/client/manifest.json'), 'utf-8')
);
const cssFile = manifest['index.html'].css[0];
const cssLink = `<link rel="stylesheet" href="/${cssFile}">`;
const jsFile = manifest['index.html'].file;
const routesToPrerender = [
  '/',
  '/aefaq',
  '/prfaq',
  '/psfaq',
  '/aeexpr',
  '/rules',
  '/404',
];
(async () => {
  for (const url of routesToPrerender) {
    const context = {};
    const {html} = await render(url, context);
    const {helmet} = context;
    let htmlWithMeta = template
      .replace(/<title>.*<\/title>/, `${helmet.title.toString()}`)
      .replace(
        "</head>",
        `${helmet.meta.toString()}${helmet.link.toString()}</head>`
      )
      .replace("<!--app-html-->", html)
      .replace("</head>", `${cssLink}</head>`)
      .replace('src="/src/main.tsx"', `src="/${jsFile}"`);
    if (url.endsWith('404')) {
      htmlWithMeta = htmlWithMeta.replace(
        '<meta name="prerender-status-code" content="200">',
        '<meta name="prerender-status-code" content="404">'
      );
    }
        if (['/aefaq', '/prfaq', '/psfaq', '/aeexpr'].includes(url)) {
          htmlWithMeta = htmlWithMeta.replace(/<details/g, '<details open');
        }
        const filePath = toAbsolute(
          url === '/' ? 'dist/client/index.html' : `dist/client${url}.html`
        );
        const dirPath = path.dirname(filePath);
        if (!fs.existsSync(dirPath)) {
          fs.mkdirSync(dirPath, {recursive: true});
        }
        fs.writeFileSync(filePath, htmlWithMeta);
    console.log(`prerendered: ${url} to ${path.relative(__dirname, filePath)}`);
  }
})();

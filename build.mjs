import { build, context } from 'esbuild';
import { cp, mkdir, readFile, writeFile } from 'node:fs/promises';

const options = {
  entryPoints: ['src/main.jsx'],
  bundle: true,
  outdir: 'dist',
  minify: !process.argv.includes('--serve'),
  define: { 'process.env.NODE_ENV': JSON.stringify(process.argv.includes('--serve') ? 'development' : 'production') },
};

await mkdir('dist', { recursive: true });
await cp('public', 'dist', { recursive: true });
const html = await readFile('index.html', 'utf8');
await writeFile('dist/index.html', html.replace('/src/main.jsx', '/main.js').replace('</head>', '  <link rel="stylesheet" href="/main.css">\n</head>'));

if (process.argv.includes('--serve')) {
  const app = await context(options);
  await app.watch();
  const server = await app.serve({ servedir: 'dist', host: '127.0.0.1', port: 4173 });
  console.log(`Local preview: http://127.0.0.1:${server.port}`);
} else {
  await build(options);
  console.log('Built portfolio in dist/');
}

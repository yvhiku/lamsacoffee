import { cp, mkdir, copyFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const root = new URL('./', import.meta.url);
const output = new URL('./dist/', root);
await mkdir(output, { recursive: true });
for (const file of ['index.html', 'style.css', 'app.js']) {
  await copyFile(new URL(file, root), new URL(file, output));
}
await cp(fileURLToPath(new URL('assets/', root)), fileURLToPath(new URL('assets/', output)), { recursive: true });
console.log('Built LAMSA static website in dist/');

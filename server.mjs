import http from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
const root = process.cwd();
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp' };
http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, 'http://localhost');
    const file = url.pathname === '/' || url.pathname === '/menu' ? 'index.html' : decodeURIComponent(url.pathname).replace(/^\/+/, '');
    const resolved = path.resolve(root, file);
    if (!resolved.startsWith(root + path.sep)) { res.writeHead(403); res.end(); return; }
    const data = await readFile(resolved);
    res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream' }); res.end(data);
  } catch { res.writeHead(404); res.end('Not found'); }
}).listen(3000, '0.0.0.0', () => console.log('LAMSA is ready at http://localhost:3000'));

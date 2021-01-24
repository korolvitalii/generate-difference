import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
// читаємо шлях файлу і дістаємо його контент
const readFile = (filename) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const getFixturePath = path.resolve(__dirname, '..', '__fixtures__', filename);
  const fileContent = fs.readFileSync(getFixturePath, 'utf-8');
  return fileContent;
};

const getFormatFile = (filename) => path.extname(filename);

export {
  readFile,
  getFormatFile,
};

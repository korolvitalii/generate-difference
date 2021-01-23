import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import genediff from '../script/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.resolve(__dirname, '..', '__fixtures__', filename);
const fileContent = (filename) =>fs.readFileSync(getFixturePath, 'utf-8');

const pathFile1 = getFixturePath('filepath1.json');
const pathFile2 = getFixturePath('filepath2.json');

test('genediff', () => {
  const expected = `{
- follow: false
  host: hexlet.io
- proxy: 123.234.53.22
- timeout: 50
+ timeout: 20
+ verbose: true
}`;
  expect(genediff(pathFile1,pathFile2)).toEqual(expected);
});

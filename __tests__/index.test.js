// import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import genediff from '../script/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.resolve(__dirname, '..', '__fixtures__', filename);
// const fileContent = (filename) =>fs.readFileSync(getFixturePath, 'utf-8');

const pathFile1Json = getFixturePath('filepath1.json');
const pathFile2Json = getFixturePath('filepath2.json');
const pathFile1Yml = getFixturePath('filepath1.yml');
const pathFile2Yml = getFixturePath('filepath2.yml');

test('genediff', () => {
  const expected = `{
- follow: false
  host: hexlet.io
- proxy: 123.234.53.22
- timeout: 50
+ timeout: 20
+ verbose: true
}`;
  expect(genediff(pathFile1Json, pathFile2Json)).toEqual(expected);
  expect(genediff(pathFile1Yml, pathFile2Yml)).toEqual(expected);
});

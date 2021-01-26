import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import genediff from '../script/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.resolve(__dirname, '..', '__fixtures__', filename);

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

const deepFile1Json = getFixturePath('deepfile1.json');
const deepFule2Json = getFixturePath('deepfile2.json');
test('genediffDeep', () => {
  const expectedDeep = `{
    common: {
      + follow: false
        setting1: Value 1
      - setting2: 200
      - setting3: true
      + setting3: null
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
        setting6: {
            doge: {
              - wow: 
              + wow: so much
            }
            key: value
          + ops: vops
        }
    }
    group1: {
      - baz: bas
      + baz: bars
        foo: bar
      - nest: {
            key: value
        }
      + nest: str
    }
  - group2: {
        abc: 12345
        deep: {
            id: 45
        }
    }
  + group3: {
        fee: 100500
        deep: {
            id: {
                number: 45
            }
        }
    }
}`;
  expect(genediff(deepFile1Json, deepFule2Json)).toEqual(expectedDeep);
});

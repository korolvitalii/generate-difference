import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import genediff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.resolve(__dirname, '..', '__fixtures__', filename);

const pathFile1Json = getFixturePath('filepath1.json');
const pathFile2Json = getFixturePath('filepath2.json');
const pathFile1Yml = getFixturePath('filepath1.yml');
const pathFile2Yml = getFixturePath('filepath2.yml');
test('genediff', () => {
  const expectedToJson = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;
  expect(genediff(pathFile1Yml, pathFile2Yml)).toEqual(expectedToJson);
  expect(genediff(pathFile1Json, pathFile2Json)).toEqual(expectedToJson);
});

const deepFile1Json = getFixturePath('deepfile1.json');
const deepFile2Json = getFixturePath('deepfile2.json');
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
  const plained = `
Property 'common.follow' was added with value: false
Property 'common.setting2' was removed
Property 'common.setting3' was updated. From true to null
Property 'common.setting4' was added with value: 'blah blah'
Property 'common.setting5' was added with value: [complex value]
Property 'common.setting6.doge.wow' was updated. From '' to 'so much'
Property 'common.setting6.ops' was added with value: 'vops'
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group1.nest' was updated. From [complex value] to 'str'
Property 'group2' was removed
Property 'group3' was added with value: [complex value]`;
  expect(genediff(deepFile1Json, deepFile2Json)).toEqual(expectedDeep);
  expect(genediff(deepFile1Json, deepFile2Json, 'plain')).toEqual(plained);
});

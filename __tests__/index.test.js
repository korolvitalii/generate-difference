import { test, expect } from '@jest/globals';
import genediff from '../script/index.js';

test('genediff', () => {
  const expected = `{
- follow: false
  host: hexlet.io
- proxy: 123.234.53.22
- timeout: 50
+ timeout: 20
+ verbose: true
}`;
  expect(genediff('filepath1.json', 'filepath2.json')).toEqual(expected);
});

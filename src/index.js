import readFile from './utils.js';
import getParsedFile from './parser.js';
import generateDiffTree from './gendiff.js';

const geneDiff = (before, after) => {
  const beforeFileContent = readFile(before);
  const afterFileContent = readFile(after);
  const parsedFileBefore = getParsedFile(beforeFileContent);
  const parsedFileAfter = getParsedFile(afterFileContent);
  return generateDiffTree(parsedFileBefore, parsedFileAfter);
};

export default geneDiff;

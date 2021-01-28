import { readFile, getFormatFile } from './utils.js';
import parseFile from './parser.js';
import getDiff from './makeTree.js';
import formater from './formatter/index.js';

// отримуємо два файли, дістаємо іх контент, парсимо і будуємо дерево відмінностей
const geneDiff = (before, after, formatName = 'stylish') => {
  const beforeFileContent = readFile(before);
  const afterFileContent = readFile(after);
  const beforeFileFormat = getFormatFile(before);
  const afterFileFormat = getFormatFile(after);
  const parsedFileBefore = parseFile(beforeFileContent, beforeFileFormat);
  const parsedFileAfter = parseFile(afterFileContent, afterFileFormat);
  const tree = getDiff(parsedFileBefore, parsedFileAfter);
  // console.log(formater(tree, formatName));
  return formater(tree, formatName);
};

export default geneDiff;

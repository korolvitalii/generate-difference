import stylish from './stylish.js';
import plain from './plain.js';

export default (tree, formatName) => {
//   console.log(formatName);
  if (formatName === 'plain') {
    return plain(tree);
  }
  if (formatName === 'json') {
    return JSON.stringify(tree);
  }
  return stylish(tree);
};

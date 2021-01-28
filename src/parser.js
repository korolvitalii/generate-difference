import yaml from 'js-yaml';

const parseFile = (file, format) => {
  let result;
  if (format === '.json') {
    result = JSON.parse(file);
  }
  if (format === '.yml') {
    result = yaml.load(file);
  }
  return result;
};

export default parseFile;

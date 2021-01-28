import yaml from 'js-yaml';

const parseFile = (file, format) => {
  if (format === '.json') {
    return JSON.parse(file);
  }
  if (format === '.yml') {
    return yaml.load(file);
  }
  return 'Error';
};

export default parseFile;

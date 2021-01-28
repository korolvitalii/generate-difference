import _ from 'lodash';

const makePath = (path, current) => {
  const result = [...path, current];
  const pathprop = `'${result.join('.')}'`;
  return pathprop;
};

const checkValueType = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (_.isString(value)) {
    return `'${value}'`;
  }
  return value;
};

const getFormattedParentNode = (node, path, iter) => {
  const { children, key } = node;
  const currentPath = [...path, key];
  return iter(children, currentPath);
};

const getFormattedAddedNode = (node, path) => {
  const { key, value } = node;
  const getPath = makePath(path, key);
  const checkValue = checkValueType(value, getPath);
  return `\nProperty ${getPath} was added with value: ${checkValue}`;
};

const getFormattedUpdateNode = (node, path) => {
  const { key, valueBefore, valueAfter } = node;
  const getPath = makePath(path, key);
  const checkValueAfter = checkValueType(valueAfter, getPath);
  const checkValueBefor = checkValueType(valueBefore, path);
  return `\nProperty ${getPath} was updated. From ${checkValueBefor} to ${checkValueAfter}`;
};

const getFormattedRemovedtNode = (node, path) => {
  const { key } = node;
  const getPath = makePath(path, key);
  return `\nProperty ${getPath} was removed`;
};

const getFormattedUnchangeNode = () => [];

const mapTypeToNodeFormatter = {
  parent: getFormattedParentNode,
  notchanged: getFormattedUnchangeNode,
  added: getFormattedAddedNode,
  removed: getFormattedRemovedtNode,
  updated: getFormattedUpdateNode,
};

const formatter = (diff) => {
  const iter = (nodes, path = []) => {
    const parts = nodes.flatMap((node) => {
      const { type } = node;
      const getFormattedNode = mapTypeToNodeFormatter[type];
      return getFormattedNode(node, path, iter);
    });
    const result = `${parts.join('')}`;
    return result;
  };
  return iter(diff);
};

export default formatter;

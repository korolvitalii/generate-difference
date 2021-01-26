import _ from 'lodash';

const added = '  +';
const deleted = '  -';
const indent = '    ';
const makeIndent = (deep = 0) => indent.repeat(deep);

const stringify = (obj, deep) => {
  const keys = _.keys(obj);
  const indented = makeIndent(deep) + indent;
  const rows = keys.map((key) => {
    if (_.isObject(obj[key])) {
      const value = stringify(obj[key], deep + 1);
      return `${indented}${key}: ${value}`;
    }
    return `${indented}${key}: ${obj[key]}`;
  });
  const braceIndent = makeIndent(deep);
  return `{\n${rows.join('\n')}\n${braceIndent}}`;
};

const checkValueType = (value, deep = 0) => {
  const result = (_.isObject(value)) ? stringify(value, deep + 1) : value;
  return result;
};

const getFormattedUnchangeNode = (node, deep) => {
  const { key, value } = node;
  const indented = makeIndent(deep) + indent;
  const checkValue = checkValueType(value, deep);
  const row = `${key}: ${checkValue}`;
  return `${indented}${row}`;
};

const getFormattedAddedNode = (node, deep) => {
  const { key, value } = node;
  const indented = makeIndent(deep) + added;
  const checkValue = checkValueType(value, deep);
  const row = `${key}: ${checkValue}`;
  return `${indented} ${row}`;
};

const getFormattedDeleteNode = (node, deep) => {
  const { key, value } = node;
  const indented = makeIndent(deep) + deleted;
  const checkValue = checkValueType(value, deep);
  const row = `${key}: ${checkValue}`;
  return `${indented} ${row}`;
};

const getFormattedParentNode = (node, deep, iter) => {
  const { key, children } = node;
  const indented = makeIndent(deep) + indent;
  const values = iter(children, deep + 1);
  const row = `${key}: ${values}`;
  return `${indented}${row}`;
};

const getFormattedUpdatedNode = (node, deep) => {
  const { key, valueBefore, valueAfter } = node;
  const beforeIndented = makeIndent(deep) + deleted;
  const afterIndented = makeIndent(deep) + added;
  const beforeValue = checkValueType(valueBefore, deep);
  const afterValue = checkValueType(valueAfter, deep);
  const beforeRow = `${key}: ${beforeValue}`;
  const afterRow = `${key}: ${afterValue}`;
  const result = [
    `${beforeIndented} ${beforeRow}`,
    `${afterIndented} ${afterRow}`,
  ];
  return result;
};

const mapTypeToNodeFormatter = {
  parent: getFormattedParentNode,
  notchanged: getFormattedUnchangeNode,
  added: getFormattedAddedNode,
  deleted: getFormattedDeleteNode,
  changed: getFormattedUpdatedNode,
};

const formatter = (diff) => {
  const iter = (nodes, deep) => {
    const parts = nodes.flatMap((node) => {
      const { type } = node;
      const getFormattedNode = mapTypeToNodeFormatter[type];
      return getFormattedNode(node, deep, iter);
    });
    const braceIndent = makeIndent(deep);
    return `{\n${parts.join('\n')}\n${braceIndent}}`;
  };
  return iter(diff, 0);
};

export default formatter;

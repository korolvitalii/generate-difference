import _ from 'lodash';

export default (before, after) => {
  const keys = _.union(_.keys(before), _.keys(after));
  const sortedKeys = _.sortBy(keys);
  const result = sortedKeys.reduce((acc, key) => {
    if (!_.has(after, key)) {
      return [...acc, `- ${key}: ${before[key]}`];
    }
    if (!_.has(before, key)) {
      return [...acc, `+ ${key}: ${after[key]}`];
    }
    if (_.has(after, key) && _.has(before, key)) {
      if (after[key] === before[key]) {
        return [...acc, `  ${key}: ${after[key]}`];
      }
      return [...acc, `- ${key}: ${before[key]}`, `+ ${key}: ${after[key]}`];
    }
    return acc;
  }, []);
  return `{
${result.join('\n')}
}`;
};
// export default (before, after) => {
//   const keys = _.union(_.keys(before), _.keys(after));
//   const sortedKeys = _.sortBy(keys);
//   return sortedKeys.map((key) => {
//     if (!_.has(after, key)) {
//       return { type: 'deleted', key, value: before[key] };
//     }
//     if (!_.has(before, key)) {
//       return { type: 'added', key, value: after[key] };
//     }
//     return {
//       key, type: 'modified', oldValue: before[key], newValue: after[key],
//     };
//   });
// };

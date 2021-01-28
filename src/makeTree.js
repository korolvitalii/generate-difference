import _ from 'lodash';

const getDiff = (object1, object2) => {
  const commonKeys = _.sortBy(_.union(Object.keys(object1), Object.keys(object2)));
  const diff = commonKeys.map((key) => {
    if (!_.has(object1, key)) {
      return { key, type: 'added', value: object2[key] };
    }
    if (!_.has(object2, key)) {
      return { key, type: 'removed', value: object1[key] };
    }
    if (_.isObject(object1[key]) && _.isObject(object2[key])) {
      return { key, type: 'parent', children: getDiff(object1[key], object2[key]) };
    }
    if (object1[key] === object2[key]) {
      return { key, type: 'notchanged', value: object1[key] };
    }
    return {
      key, type: 'updated', valueBefore: object1[key], valueAfter: object2[key],
    };
  });
  return diff;
};

export default getDiff;

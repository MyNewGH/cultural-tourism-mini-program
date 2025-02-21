const serialize = (value: unknown): value is Function => typeof value === 'function';
export const isObject = (val) => {
  return Object.prototype.toString.call(val) === '[object Object]';
};

const isArray = (val) => {
  return Object.prototype.toString.call(val) === '[object Array]';
};

const isNullString = (val) => {
  return val === 'null';
};

const isUndefinedString = (val) => {
  return val === 'undefined';
};

const isBooleanString = (val) => {
  return val === 'false' || val === 'true';
};

const isObjectString = (val) => {
  try {
    return isObject(JSON.parse(val));
  } catch (err) {
    return false;
  }
};

const isArrayString = (val) => {
  try {
    return isArray(JSON.parse(val));
  } catch (err) {
    return false;
  }
};

const parse = (val) => {
  if (isUndefinedString(val)) {
    return undefined;
  } else if (isNullString(val)) {
    return null;
  } else if (isBooleanString(val)) {
    return val === 'true';
  } else if (isArrayString(val)) {
    return JSON.parse(val);
  } else if (isObjectString(val)) {
    return JSON.parse(val);
  } else {
    return val;
  }
};

function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArray(value) && (isArray(value) || typeof value == 'string' || typeof value.splice == 'function')) {
    return !value.length;
  }

  for (let key in value) {
    if (Object.hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}
export { parse, isEmpty };

export default serialize;

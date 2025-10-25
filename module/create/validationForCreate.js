function isNumeric(str) {
  /// 빈 문자열도 false로 판단함
  return /^\d+$/.test(str);
}

export function isValidIdForCreate(id) {
  return id !== '';
}

export function isValidNameForCreate(name) {
  return name !== '' && name.length <= 50;
}

export function isValidPriceForCreate(price) {
  return isNumeric(price) && +price >= 0;
}

export function isValidQuantityForCreate(quantity) {
  return isNumeric(quantity) && +quantity >= 0;
}

export function isValidCategoryForCreate(category) {
  return category !== '';
}

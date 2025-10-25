function isNumeric(str) {
  /// 빈 문자열도 false로 판단함
  return /^\d+$/.test(str);
}

export function isValidIdForEdit(id) {
  return id !== '';
}

export function isValidNameForEdit(name) {
  return name === '' || name.length <= 50;
}

export function isValidPriceForEdit(price) {
  return price === '' || (isNumeric(price) && +price >= 0);
}

export function isValidQuantityForEdit(quantity) {
  return quantity === '' || (isNumeric(quantity) && +quantity >= 0);
}

export function isValidCategoryForEdit(category) {
  return true;
}

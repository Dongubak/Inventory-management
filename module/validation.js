function isNumeric(str) {
  /// 빈 문자열도 false로 판단함
  return /^\d+$/.test(str);
}

export function validateId(id) {
  return id !== '';
}

export function validName(name) {
  return name !== '' && name.length <= 50;
}

export function validPrice(price) {
  return isNumeric(price) && +price >= 0;
}

export function validQuantity(quantity) {
  return isNumeric(quantity) && +quantity >= 0;
}

export function validCategory(category) {
  return category !== '';
}

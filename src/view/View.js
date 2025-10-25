import {
  isValidCategoryForCreate,
  isValidIdForCreate,
  isValidNameForCreate,
  isValidPriceForCreate,
  isValidQuantityForCreate,
} from '../../module/create/validationForCreate.js';
import {
  isValidCategoryForEdit,
  isValidIdForEdit,
  isValidNameForEdit,
  isValidPriceForEdit,
  isValidQuantityForEdit,
} from '../../module/edit/validationForEdit.js';
import { ask, close, print, printLines } from '../../module/inputOutput.js';

class View {
  constructor() {}

  async printMenuAndInputChoice() {
    await printLines([
      '[1] 상품 등록',
      '[2] 상품 수정',
      '[3] 상품 삭제',
      '[4] 입고 (수량 증가)',
      '[5] 출고 (수량 감소)',
      '[6] 목록 보기 (정렬/필터 포함)',
      '[7] 검색 (이름/카테고리/가격범위)',
      '[8] 통계 (총 수량/총 금액/카테고리별 합계)',
      '[9] 저장 및 종료',
    ]);
    const choice = await ask('선택: ');
    return choice;
  }

  async register() {
    print('[1] 상품 등록');

    const id = await ask('ID: ');
    if (!isValidIdForCreate(id)) throw new Error();

    const name = await ask('이름: ');
    if (!isValidNameForCreate(name)) throw new Error();

    const price = await ask('가격(원): ');
    if (!isValidPriceForCreate(price)) throw new Error();

    const quantity = await ask('수량: ');
    if (!isValidQuantityForCreate(quantity)) throw new Error();

    const category = await ask('카테고리 : ');
    if (!isValidCategoryForCreate(category)) throw new Error();

    return {
      id,
      name,
      category,
      price: +price,
      quantity: +quantity,
    };
  }

  async preEdit() {
    await print('[2] 상품 수정');

    const id = await ask('ID: ');
    if (!isValidIdForCreate(id)) throw new Error();

    return id;
  }

  async postEdit(msg) {
    await print(msg);

    const name = await ask('이름 (Enter 스킵가능): ');
    if (!isValidNameForEdit(name)) throw new Error();

    const price = await ask('가격(원) (Enter 스킵가능): ');
    if (!isValidPriceForEdit(price)) throw new Error();

    const quantity = await ask('수량 (Enter 스킵가능): ');
    if (!isValidQuantityForEdit(quantity)) throw new Error();

    const category = await ask('카테고리 (Enter 스킵가능): ');
    if (!isValidCategoryForEdit(category)) throw new Error();

    return {
      name,
      category,
      price: +price,
      quantity: +quantity,
    };
  }

  async wrongInput() {
    await print('잘못된 입력입니다.');
  }

  async successMsg(msg) {
    await printLines([msg, '']);
  }
}

export default View;

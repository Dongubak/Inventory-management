import { ask, close, print, printLines } from '../../module/inputOutput.js';
import {
  validateId,
  validCategory,
  validName,
  validPrice,
  validQuantity,
} from '../../module/validation.js';

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
    if (!validateId(id)) throw new Error();

    const name = await ask('이름: ');
    if (!validateId(name)) throw new Error();

    const price = await ask('가격(원): ');
    if (!validPrice(price)) throw new Error();

    const quantity = await ask('수량: ');
    if (!validQuantity(quantity)) throw new Error();

    const category = await ask('카테고리 : ');
    if (!validCategory(category)) throw new Error();

    return {
      id,
      name,
      price,
      quantity,
      category,
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

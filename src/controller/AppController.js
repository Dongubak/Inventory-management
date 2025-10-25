import { close } from '../../module/inputOutput.js';
import Inventory from '../model/Inventory.js';
import Product from '../model/Product.js';
import View from '../view/View.js';
class AppController {
  constructor(view = new View(), inventory = new Inventory()) {
    this.view = view;
    this.inventory = inventory;
  }

  async run() {
    while (true) {
      try {
        const choice = await this.view.printMenuAndInputChoice();
        if (choice === '9') {
          close();
          break;
        }
        await this.route(choice);
      } catch (e) {
        console.log(e);
      }
    }
  }

  async route(choice) {
    switch (choice) {
      case '1':
        return this.create();
      case '2':
        return this.edit();
      case '3':
        return this.delete();
      case '4':
        return this.receive();
      case '5':
        return this.shipping();
      case '6':
        return this.list();
      case '7':
        return this.search();
      case '8':
        return this.statistic();
      default:
    }
  }

  async create() {
    const product = await this.view.register();
    this.inventory.register(new Product(product));
    const msg = `→ 등록 성공: ${product.id} (${product.name})`;
    await this.view.successMsg(msg);
  }

  async edit() {
    const id = await this.preEdit();
    const product = await this.postEdit(id);
    this.inventory.edit(product);
    const msg = `→ 수정 성공: ${product.id} (${product.name})`;
    await this.view.successMsg(msg);
  }

  async preEdit() {
    const id = await this.view.preEdit();
    if (!this.inventory.findById(id)) throw new Error();
    return id;
  }

  async postEdit(id) {
    const product = this.inventory.findById(id);
    const msg = `아이디 확인 완료: ${product.id} (${product.name})`;
    const editProduct = await this.view.postEdit(msg);
    return {
      ...editProduct,
      id,
    };
  }

  async delete() {}
  async receive() {}
  async shipping() {}
  async list() {}
  async search() {}
  async statistic() {}
}

export default AppController;

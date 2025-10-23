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
        break;
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
  }

  async edit() {}
  async delete() {}
  async receive() {}
  async shipping() {}
  async list() {}
  async search() {}
  async statistic() {}
}

export default AppController;

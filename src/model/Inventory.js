class Inventory {
  constructor(initData = []) {
    this.products = initData;
  }

  findById(id) {
    return this.products.find((product) => product.id === id);
  }

  register(newProduct) {
    if (this.findById(newProduct.id)) throw new Error();
    this.products.push(newProduct);
  }
}

export default Inventory;

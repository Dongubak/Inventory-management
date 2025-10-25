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

  edit(editProduct) {
    this.products.forEach((product) => {
      if (product.id === editProduct.id) {
        product.name = editProduct.name !== '' ? editProduct.name : product.name;
        product.price = editProduct.price !== '' ? editProduct.price : product.price;
        product.quantity = editProduct.quantity !== '' ? editProduct.quantity : product.quantity;
        product.category = editProduct.category !== '' ? editProduct.category : product.category;
      }
    });
  }
}

export default Inventory;

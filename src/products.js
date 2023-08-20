class Products {
  constructor(id, img, title, types, sizes, price, category, rating, amount) {
    this.id = id;
    this.img = img;
    this.title = title;
    this.types = this.TypesList(types);
    this.sizes = this.TypesList(sizes);
    this.defPrice = price;
    this.price = price;
    this.category = category;
    this.rating = rating;
    this.amount = amount;
  }
  TypesList(types) {
    let array = [];
    types.forEach((el) => {
      array.push({ el, isActive: false });
    });
    array[0].isActive = true;
    return array;
  }
  SizeList(sizes) {
    let array = [];
    sizes.forEach((el) => {
      array.push({ el, isActive: false });
    });
    array[0].isActive = true;
    return array;
  }
  isTypeActive(idx) {
    this.types.forEach((el) => {
      el.isActive = false;
    });
    this.types[idx].isActive = true;
  }
}

export default Products;

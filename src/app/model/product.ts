export class Product {
  [key: string]: any;
  id: number = 0;
  catId: number = 0;
  name: string = '';
  description: string = '';
  image: string = '';
  imageLg: string = '';
  price: number = 0;
  stock: number = 0;
  featured: boolean = false;
  active: boolean = true;
  disabled: boolean = true

  /*constructor(id: number, catId: number, name: string, description: string,
    image: string, price: number, stock: number, featured: boolean, active: boolean) {
      this.id = id;
      this.catId = catId;
      this.name = name;
      this.description = description;
      this.image = image;
      this.price = price;
      this.stock = stock;
      this. featured = featured;
      this.active = active;
    }*/
}

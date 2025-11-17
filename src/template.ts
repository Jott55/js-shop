const defaultUser: User = {
  Id: 1,
  Name: "undefined",
  Email: "undefined@example.com",
  Password_hash: "1234asdf",
  Photo_url: "http://localhost:5173/favicon.svg",
};
const defaultProductCart: ProductCart = {
  Id: 1,
  Name: "undefined",
  Description: "Lorem",
  Image_url: "http://localhost:5173/favicon.svg",
  Price: 101,
};
const defaultProduct: Product = {
  Id: 1,
  Name: "undefined",
  Image_url: "http://localhost:5173/favicon.svg",
  Price: 101,
};

interface product_interface {
  Id: number;
  Name: string;
  Image_url: string;
  Price: number;
}

class Product implements product_interface {
  Id: number;
  Name: string;
  Image_url: string;
  Price: number;

  constructor(id: number, name: string, image_url: string, price: number) {
    this.Id = id;
    this.Name = name;
    this.Image_url = image_url;
    this.Price = price;
  }
}

class ProductCart extends Product {
  Description: string;

  constructor(
    id: number,
    name: string,
    image_url: string,
    price: number,
    description: string,
  ) {
    super(id, name, image_url, price);
    this.Description = description;
  }
}

class ProductCartDefault extends ProductCart {
  constructor() {
    super(
      defaultProductCart.Id,
      defaultProductCart.Name,
      defaultProductCart.Image_url,
      defaultProductCart.Price,
      defaultProductCart.Description,
    );
  }
}

class ProductDefault extends Product {
  constructor() {
    super(
      defaultProduct.Id,
      defaultProduct.Name,
      defaultProduct.Image_url,
      defaultProduct.Price,
    );
  }
}

export class User {
  Id: number;
  Name: string;
  Email: string;
  Password_hash: string;
  Photo_url: string;

  constructor(
    id: number,
    name: string,
    email: string,
    password_hash: string,
    photo_url: string,
  ) {
    this.Id = id;
    this.Name = name;
    this.Email = email;
    this.Password_hash = password_hash;
    this.Photo_url = photo_url;
  }
}

export class UserDefault extends User {
  constructor() {
    super(
      defaultUser.Id,
      defaultUser.Name,
      defaultUser.Email,
      defaultUser.Password_hash,
      defaultUser.Photo_url,
    );
  }
}

export { Product, ProductDefault, ProductCart, ProductCartDefault };

const defaultUser: User = {
  Id: 1,
  Name: "undefined",
  Email: "undefined@example.com",
  Password: "1234asdf",
  Photo_url: "http://localhost:5173/favicon.svg",
};

const favicon = "http://localhost:5173/favicon.svg"

export interface IProduct {
  Id: number;
  Name: string;
  Image_url: string;
  Price: number;
}

export interface IProductDisplay extends IProduct {
  Description: string;
}

export interface IProductCart extends IProduct {
  Quantity: number
}

export class ProductCart implements IProductCart {
  Quantity: number;
  Id: number;
  Name: string;
  Image_url: string;
  Price: number;
  
  constructor() {
    this.Id = 1
    this.Name = "undefined name"
    this.Image_url = favicon
    this.Price = 101
    this.Quantity = 2
  }
}

export class Product implements IProduct {
  constructor() {
    this.Id = 1;
    this.Name = "Undefined name";
    this.Image_url = favicon;
    this.Price = 9001;
  }
    Id: number;
    Name: string;
    Image_url: string;
    Price: number;
}

export class ProductDisplay implements IProductDisplay  {
    Description: string;
    Id: number;
    Name: string;
    Image_url: string;
    Price: number;

    constructor() {
        this.Id = 1;
        this.Name = "Undefined name";
        this.Image_url = favicon;
        this.Price = 9001;
        this.Description = "lorem";
    }
}


export interface IUser {
    Id: number;
    Name: string;
    Email: string;
    Password: string;
    Photo_url: string;
}

export class User implements IUser {
    Id: number;
    Name: string;
    Email: string;
    Password: string;
    Photo_url: string;

    constructor() {
        this.Id = 1;
        this.Name = "Undefined name";
        this.Email = "undefined email";
        this.Password = "undefined password";
        this.Photo_url = favicon;
    }
}

export interface ILoginUser {
  Email: string;
  Password: string
}

export class LoginUser implements ILoginUser {
  Email: string;
  Password: string;

  constructor() {
    this.Email = ""
    this.Password = ""
  }
  
}
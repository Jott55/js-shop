const defaultUser: User = {
  Id: 1,
  Name: "undefined",
  Email: "undefined@example.com",
  Password_hash: "1234asdf",
  Photo_url: "http://localhost:5173/favicon.svg",
};

const favicon = "http://localhost:5173/favicon.svg"

export interface IProduct {
  Id: number;
  Name: string;
  Image_url: string;
  Price: number;
}

export interface IProductCart extends IProduct {
    Description: string;
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

export class ProductCart implements IProductCart  {
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
    Password_hash: string;
    Photo_url: string;
}

export class User implements IUser {
    Id: number;
    Name: string;
    Email: string;
    Password_hash: string;
    Photo_url: string;

    constructor() {
        this.Id = 1;
        this.Name = "Undefined name";
        this.Email = "undefined email";
        this.Password_hash = "undefined password";
        this.Photo_url = "undefined photo";
    }
}
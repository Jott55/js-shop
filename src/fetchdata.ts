import axios from "axios";
import { ProductCart, Product, ProductCartDefault, User } from "./template";

const baseUrl = "http://localhost:8069/";

interface productRaw {
  Id: number;
  Name: string;
  Image_url: string;
  Price: number;
}

interface productAll extends productRaw {
  Description: string;
}

export async function getData() {
  try {
    const res = await axios.get<Array<productRaw>>(baseUrl + "product");

    return res.data.map((item) => {
      return new Product(item.Id, item.Name, item.Image_url, item.Price);
    });
  } catch (err) {
    console.error(err);
  }
}

export async function getProduct(id: number) {
  try {
    const res = await axios.get<productAll>(baseUrl + "product/" + id);

    console.log(res);

    return new ProductCart(
      res.data.Id,
      res.data.Name,
      res.data.Image_url,
      res.data.Price,
      res.data.Description,
    );
  } catch (err) {
    throw err;
  }
}

export async function postProduct(product: ProductCart) {
  let res = await axios.post(baseUrl + "post/product", {
    Product: product,
  });

  console.log(res);
}



export async function deleteProduct(id: number) {
  let res = await axios.get(baseUrl + "product/" + id + "/delete");
  console.log(res);
}

export async function getUser(id: number): Promise<User> {
  const res = await axios.get<User>(baseUrl + "user/" + id);
  const data = res.data;
  return new User(
    data.Id,
    data.Name,
    data.Email,
    data.Password_hash,
    data.Photo_url,
  );
}
export async function insertUser(user: User) {
  let res = await axios.post(baseUrl + "user/insert", {
    User: user,
  });

  console.log(res)
}
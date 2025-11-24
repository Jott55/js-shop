import axios from "axios";
import { Product, type IProduct, type IProductCart, type IProductDisplay, type IUser } from "./template";

const baseUrl = "http://localhost:8069/";

export async function getData(): Promise<IProduct[] | null> {
    const res = await axios.get<Array<IProduct>>(baseUrl + "product");
    if (res.data) {
        return res.data
    }
  return null
}

export async function getProduct(id: number): Promise<IProductDisplay | null> {

    const res = await axios.get<IProductDisplay>(baseUrl + "product/" + id);

    if (res.data) {
        return res.data
    }

    return null
}

export async function getProductCart(user_id: number): Promise<IProductCart[] | null> {
  
  const res = await axios.get<IProductCart[]>(baseUrl + "user/"+user_id + "/cart")

  if (res.data) return res.data
  
  return null
}

export async function postProduct(product: IProductDisplay) {
  let res = await axios.post(baseUrl + "post/product", {
    Product: product,
  });

  console.log(res);
}



export async function deleteProduct(id: number) {
  let res = await axios.get(baseUrl + "product/" + id + "/delete");
  console.log(res);
}

export async function getUser(id: number): Promise<IUser | null> {
  const res = await axios.get<IUser>(baseUrl + "user/" + id);

  if (res.data) {
    return res.data
  }
  return null
}
export async function insertUser(user: IUser) {
  let res = await axios.post(baseUrl + "user/insert", {
    User: user,
  });

  console.log(res)
}

export async function registerUser(user: IUser): Promise<string | null> {
  let res = await axios.post(baseUrl + "register/user", {
    User: user
  })

  return res.data
}
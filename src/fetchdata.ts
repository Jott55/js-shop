import axios, { AxiosHeaders, type AxiosHeaderValue, type RawAxiosRequestHeaders } from "axios";
import { Product, type IProduct, type IProductCart, type IProductDisplay, type IUser, type ILoginUser} from "./template";

const baseUrl = "http://localhost:8069";

function getAuthCookie() {
  const cookies = document.cookie.split(';')

  return cookies[0]?.slice(cookies[0].indexOf("=")+1)
}

function generateToken() {
  return `jwtToken: ${getAuthCookie()}`
}

export function checkAuthToken(): boolean {
  return getAuthCookie() ? true : false
}

export async function getData(): Promise<IProduct[] | null> {
    const res = await axios.get<Array<IProduct>>(baseUrl + "/product");
    if (res.data) {
        return res.data
    }
  return null
}

export async function getProduct(id: number): Promise<IProductDisplay | null> {

    const res = await axios.get<IProductDisplay>(baseUrl + "/product/" + id);

    if (res.data) {
        return res.data
    }

    return null
}

export async function getProductCart(user_id: number): Promise<IProductCart[] | null> {
  const cookie_token = getAuthCookie()
  const res = await axios.get<IProductCart[]>(baseUrl + "/user/cart", 
    {
      headers: {"Authorization": `jwtToken: ${cookie_token}`}
    }
  )

  if (res.data) return res.data
  
  return null
}

export async function postProduct(product: IProductDisplay) {
  let res = await axios.post(baseUrl + "/product/insert", {
    Product: product,
  });

  console.log(res);
}



export async function deleteProduct(id: number) {
  let res = await axios.get(baseUrl + "/product/" + id + "/delete");
  console.log(res);
}

export async function getUser(): Promise<IUser | null> {
  const res = await axios.get<IUser>(baseUrl + "/user", {
    headers: {Authorization: generateToken()}
  });

  if (res.data) {
    return res.data
  }
  return null
}
export async function insertUser(user: IUser) {
  let res = await axios.post(baseUrl + "/user/insert", {
    User: user,
  });

  console.log(res)
}

export async function registerUser(user: IUser): Promise<string | null> {
  let res = await axios.post(baseUrl + "/register/user", {
    User: user
  })

  return res.data
}

export async function addItem(product_id: number) { 
  let res = await axios.post(baseUrl + "/user/item/add", {
    Product_id: product_id,
  }, {
    headers: {"Authorization": generateToken()}
  })
  console.log(res)
}

let changedProducts: IProductCart[] = []
const timeout = 1000
let time: number = 0

export async function sendChangedProducts() {
  if (changedProducts.length < 1) {
    console.log("no changes")
    return
  }
  console.log("changes saved")
  changedProducts.length = 0
}

export async function changeProduct(product: IProductCart) {
  const i = changedProducts.findIndex(value => value.Id === product.Id) 
  if (i >= 0 ) {
    changedProducts[i]!.Quantity = product.Quantity
  } 
  else {
    changedProducts.push(product)
  }
  if (time != 0) {
    clearTimeout(time)
    time = 0
  }
  time = setTimeout(sendChangedProducts, timeout)
  
}

export async function postLoginUser(user: ILoginUser) {
  let res = await axios.post(baseUrl + "/login/user", {
    LoginUser: user
  })
  
  return res.data
}
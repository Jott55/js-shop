
import axios from "axios";
import { Product } from "./template";

const baseUrl = "http://localhost:8069/"


async function getData() {
    const res = await axios.get(baseUrl + "product")
    return res.data
}

async function postProduct(product: Product) {
    let res = await axios.post(baseUrl + "post/product", {
        Id: product.Id,
        Name: product.Name,
        Image_url: product.Image_url,
        Price: product.Price,
        Description: product.Description
    })

    console.log(res)
}

async function deleteProduct(id: number) {
    let res = await axios.get(baseUrl + "product/" + id + "/delete")
    console.log(res)
}

export {getData, postProduct, deleteProduct}
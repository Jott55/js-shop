
import axios from "axios";
import { ProductCart } from "./template";

const baseUrl = "http://localhost:8069/"


async function getData() {
    const res = await axios.get(baseUrl + "product")
    return res.data
}

async function postProduct(product: ProductCart) {
    let res = await axios.post(baseUrl + "post/product", {
        Product: product
    })

    console.log(res)
}

async function deleteProduct(id: number) {
    let res = await axios.get(baseUrl + "product/" + id + "/delete")
    console.log(res)
}

export {getData, postProduct, deleteProduct}
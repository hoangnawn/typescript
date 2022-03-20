import { ProductType } from "../types/product";
import intance from "./instance";

export const list = () =>{
    const url = `/products`;
    return intance.get(url)
}
export const remove = (id: number) =>{
    const url = `/products/${id}`;
    return intance.delete(url)
}
export const add = (product: ProductType) =>{
    const url = `/products`;
    return intance.post(url, product)
}
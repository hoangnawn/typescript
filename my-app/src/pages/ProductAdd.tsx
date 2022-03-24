import React from "react";
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from "react-router-dom";
import { ProductType } from "../types/product";

type ProductAddProps = {
    onAdd: (product: ProductType) => void
}
type FormInputs = {
    name: string,
    price: number
}
const ProductAdd = (props: ProductAddProps) =>{
    const { register, handleSubmit, formState} = useForm<FormInputs>();
    const navigate = useNavigate();

    const onSumbit: SubmitHandler<FormInputs> = data =>{
        props.onAdd(data);
        navigate('admin/product')
    }
    return (
        <form action="" onSubmit={handleSubmit(onSumbit)}>
           Name: <input type="text" {...register('name', {required: true})} /> <br />
           Price  <input type="number" {...register('price')} /> <br />
            <button className="btn">Add</button>
        </form>
    )
}
export default ProductAdd
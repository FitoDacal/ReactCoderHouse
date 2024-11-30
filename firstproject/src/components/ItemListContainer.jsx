import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { getProducts, getProductsByCategory } from "../asynmook";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function ItemListContainer() {

    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {

        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(data => setProducts(data))
    }, [categoryId])

    return (
        <div>
            <h2>Welcome to trossed!</h2>
            <ItemList products={products} />
        </div>
    );
}
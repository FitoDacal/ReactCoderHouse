import Item from "./Item";

export default function ItemList ({products}) {

    return (
        <div className=" d-flex flex-wrap justify-content-center">
            {products.map(product => <Item key={product.id} product={product}/>)}
        </div>
    )
}
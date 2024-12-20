import Item from "./Item";
import {memo} from "react"; 

function ItemList ({products}) {

    return (
        <div className=" d-flex flex-wrap justify-content-center">
            {products.map(product => <Item key={product.id} product={product}/>)}
        </div>
    )
}

export default memo(ItemList)
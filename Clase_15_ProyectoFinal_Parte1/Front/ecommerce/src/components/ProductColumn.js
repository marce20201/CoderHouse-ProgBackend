import React from 'react'
import ProductItem from './ProductItem';

const ProductColumn = ({products,deletePrd,addCart}) =>{

    return(
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {products.map(data=>{
                return(
                    <ProductItem data={data} deletePrd={deletePrd} addCart={addCart} />  
                )
            })}
        </div>
    )
}

export default ProductColumn;
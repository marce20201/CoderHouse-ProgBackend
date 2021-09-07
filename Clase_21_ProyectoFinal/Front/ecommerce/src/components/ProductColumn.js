import React from 'react'
import ProductItem from './ProductItem';
import './styles/productItem.css'

const ProductColumn = ({products,deletePrd,addCart,updatePrd}) =>{

    return(
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {products.map(data=>{
                return(
                    <ProductItem data={data} deletePrd={deletePrd} addCart={addCart} updatePrd={updatePrd} />  
                )
            })}
        </div>
    )
}

export default ProductColumn;
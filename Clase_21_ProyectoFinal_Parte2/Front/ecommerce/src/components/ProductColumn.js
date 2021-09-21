import React from 'react'
import ProductItem from './ProductItem';
import './styles/productItem.css'

const ProductColumn = ({products,deletePrd,addCart,updatePrd}) =>{

    return(
        <div id="box-item">
            {products.map(data=>{
                return(
                    <ProductItem 
                        data={data} 
                        deletePrd={deletePrd} 
                        addCart={addCart} 
                        updatePrd={updatePrd} 
                    />  
                )
            })}
        </div>
    )
}

export default ProductColumn;
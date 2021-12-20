import React from 'react'
import CategoryProductItem from './CategoryProductItem';

function CategoryProduct(props) {
    const {products} = props;
    return (
        <>
            {products.content.map((product)=> (
                <CategoryProductItem products={product}/>
            ))}
        </>
    )
}


export default CategoryProduct



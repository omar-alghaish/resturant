import React, { useState } from 'react'
import './style.css'
import Product from './product'
const Products = ({ products }) => {
  const [delectedProduct, setSelectedProduct] = useState(null)
  return (
    <>
      {products && products?.length ? (
        <div className="products">
          {products?.map((item) => {
            return <Product item={item} />
          })}
        </div>
      ) : (
        'لا يوجد منتجات'
      )}
    </>
  )
}

export default Products

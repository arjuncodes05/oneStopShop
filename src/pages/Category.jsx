import React, { useEffect, useState } from 'react'
import RenderProducts from '../components/RenderProducts'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Category() {
    const param =  useParams()

   const products = useSelector(state => state.products)
   const [filteredCategory, setFilteredCategroy] = useState([])

   useEffect(() => {
    const filtered = products.filter((product) => {
        return product.category === param.category
    })
    setFilteredCategroy(filtered)
   }, [param])

  return <RenderProducts products={filteredCategory} />
}

export default Category
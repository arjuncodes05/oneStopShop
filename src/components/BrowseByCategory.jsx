import React, { useEffect, useState } from 'react'
import laptop from "../assets/Category/laptop.svg"

function BrowseByCategory() {

    const [category, setCategory] = useState([])
    // const svg = []

    useEffect(() => {
        fetch('https://dummyjson.com/products/categories#')
        .then(res =>  res.json())
        .then(data => {
            data.map((categ) => {
                return {...categ, svg: categ.name}
            })
        })
    }, [])


  return (
    <section>
        <div>
            <div>
                <h2>Browse By Category</h2>
            </div>
            <div>
                {
                    category.map((cat, i) => {
                        <div>
                            <img src='' alt="" />
                            <h4>c</h4>
                        </div>
                    })
                }
            </div>

        </div>
    </section>
  )
}

export default BrowseByCategory
import React, {Fragment, useState, useEffect} from 'react';

const ProductList = () => {

  const [products, setProducts] = useState([]);

  useEffect( () => {
    if (products.length === 0) {
      getProducts();

    }
  });

  const getProducts = async () => {
    const url = "https://cisc201-week8-api.mkober.repl.co/products";
    let response = await fetch(url)
                         .then(response => response.json())
                         .then( data => {
                           setProducts([...data])
                           console.log(data); 
                         });
  }

  return (
    <Fragment>
      <h1>Product List</h1>
      {
        products.map( (product, index) => {
          return (
            <li key={index}>{product.name}</li>
          )
        })
      }
    </Fragment>
  )
}

export default ProductList;
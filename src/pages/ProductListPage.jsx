import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);

  useEffect(()=>{


  axios({
      method:"GET",
      url:"https://fakestoreapi.com/products"
    }).then(response => {
      //console.log(response.response)
      setProducts(response.data)
      //console.log(response.data)
    }).catch(error => console.log(error))
    
  },[])

 
  return (
    <div className="ProductListPage">
      <ul>
        {products.map((product) => (
          <li className="content" key={product.id}>
          <Link to={`/product/details/${product.id}`}>
            <div className="shop-ctn">
              <img src={product.image} alt="" />
              <p><strong>{product.title}</strong></p>
              <div className="category">
                <p>{product.category}</p>
              </div>
              <p>{product.description}</p>
              <p>{product.price}</p>
            </div>
          </Link>  
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductListPage;

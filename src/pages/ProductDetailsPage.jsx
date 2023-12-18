import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});
  const { id } = useParams()

  useEffect(()=>{
    
    axios({
        method:"GET",
        url:"https://fakestoreapi.com/products/1"
      }).then(response => {
        //console.log(response.response)
        setProduct(response.data)
        console.log(response.data)
      }).catch(error => console.log(error))
      
    },[])

  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.


  // To fetch the product details, set up an effect with the `useEffect` hook:


  return (
    <div className="ProductDetailsPage">
    { }
    </div>
  );
}

export default ProductDetailsPage;

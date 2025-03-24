import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { cartContext } from './First';
import { FaRupeeSign } from "react-icons/fa";


function SingleProduct() {
  const { id } = useParams() //useParams- extract krta h url m se dynamic part //{id}-destructuring[MDN]
  // console.log(id);
  const [item, setItem] = useState({});
  const { cart, setCart } = useContext(cartContext);

  useEffect(() => {
    fetchData(id)
  }, [id])

  async function fetchData(id) {
    const response = await axios.get(`https://fakestoreapi.in/api/products/${id}`);
    setItem(response.data.product);
  }
  // console.log(item);
  console.log(cart);

  function handleAddToCart(item) {
    setCart([...cart, item]);
  }

  return (
    <div className='Singleproduct'>
      <div className='left'><img className='leftimg' src={item.image} alt={item.title} /></div>
      <div className='right'>
        <div className="SingleproductTitle">{item.title}</div>
        <div className="SingleproductCategory">{item.category}</div>
        <div className="SingleproductPrize"><FaRupeeSign />{item.price}</div>
        <button onClick={() => handleAddToCart(item)}>Add To Cart</button>
      </div>
    </div>
  )
}

export default SingleProduct
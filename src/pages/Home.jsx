import axios from "axios";
import { useContext, useState } from 'react'
import { useEffect } from 'react'
import '../pages/style.css'
import { FaRupeeSign } from "react-icons/fa";
import { Link } from "react-router-dom";
import nofound from '../assets/nofound.jpg';
import "../pages/Home.css";
import { cartContext } from "./First";
function Home() {
    useEffect(() => {
        fetchProducts();
    }, []);
    const [products, setProducts] = useState([]);
    const {cart,setCart}=useContext(cartContext);

    console.log(cart);
    async function fetchProducts() {
        // let products=await fetch("https://fakestoreapi.in/api/products");
        // products=await products.json();
        // setProducts(products.data.products);

        const products = await axios.get("https://fakestoreapi.in/api/products");
        console.log(products);
        setProducts(products.data.products);
    }
    function trimContent(title) {
        const arr = title.split(" ");
        if (arr.length > 7) {
            const trimTitle = arr.slice(0, 8).join(" ");
            return trimTitle + "...";
        }
        else {
            return title;
        }
    }
    function notfoundimg(product) {
        if (product.image) {
            return product.image
        }
        else {
            return (nofound);
        }
    }
    function handleAddToCart(products){
        setCart([...cart,products]);
    }
    return (
        <div className="productContainer">
            {products.map((products) => {
                return (
                    <div className='product' key={products.id}>
                        <Link to={`/product/${products.id}`}><img src={products.image} /></Link>
                        <div className="productTitle">{trimContent(products.title)}</div>
                        <div className="productCategory">{products.category}</div>
                        <div className="productPrize"><FaRupeeSign />{products.price}</div>
                        <button className="addtocart"  onClick={() => handleAddToCart(products)}>Add To Cart</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Home
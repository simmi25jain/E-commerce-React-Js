import { createContext, useState } from 'react';
export const EcomContext = createContext();

function UserContext({ children }) {
    const [cart, setCart] = useState([]);

    function handleAddToCart(product) {
        if (productAlreadyExists(product.id)) {
            //PRODUCT EXISTS, SIMPLE INCREMENT QUANTITY
            setCart(
                cart.map((cartItem) =>
                    cartItem.id === product.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                )
            );
        } else {
            //PRODUCT DOES NOT EXIST,ADD IT TO CART
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    }

    console.log(cart);

    function productAlreadyExists(idToFind) {
        const existingProduct = cart.find((cartItem) => cartItem.id === idToFind);
        return existingProduct ? true : false;
    }

    function increment(id) {
        setCart(
            cart.map((cartItem) =>
                cartItem.id === id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
            )
        );
    }

    function decrement(id) {
        setCart(
            cart.map((cartItem) =>
                cartItem.id === id
                    ? { ...cartItem, quantity: cartItem.quantity > 1 ? cartItem.quantity - 1 : 1 }
                    : cartItem
            )
        );
    }

    return (
        <EcomContext.Provider value={{ cart, increment, decrement, setCart, handleAddToCart }}>
            {children}
        </EcomContext.Provider>
    )
}


export default UserContext;
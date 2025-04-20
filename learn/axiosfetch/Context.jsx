import { createContext, useState } from 'react';

// Create the context
export const CartContext = createContext();

// Create the context provider component
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const handleCart = (item) => {
        const existingItem = cart.find(cartItem => cartItem.id === item.id);
        
        if (existingItem) {
            // If item exists, update quantity
            setCart(cart.map(cartItem =>
                cartItem.id === item.id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            ));
        } else {
            // If item doesn't exist, add it with quantity 1
            setCart([...cart, { ...item, quantity: 1 }]);
        }
    };

    const handleRemoveCart = (itemId) => {
        // If quantity > 1, decrease quantity by 1
        // If quantity === 1, remove item completely
        setCart(cart.map(item => 
            item.id === itemId && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        ).filter(item => !(item.id === itemId && item.quantity === 1)));
    };

    return (
        <CartContext.Provider value={{ cart, setCart, handleCart, handleRemoveCart }}>
            {children}
        </CartContext.Provider>
    );
};
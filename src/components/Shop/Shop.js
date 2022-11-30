import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, getStoredCart } from '../../utilities/fakedb'
import './Shop.css'
import useProducts from '../../hooks/useProducts';

const Shop = () => {
    const [products] = useProducts();
    const [cart, setCart] = useState([])


    useEffect(() => {
        const storedCart = getStoredCart()
        const savedCart = []
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                const quantity = storedCart[id]
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products])


    const handleAddToCart = (selectedProduct) => {
        let newCart = []
        const exiting = cart.find(product => product.id === selectedProduct.id)
        if (!exiting) {
            selectedProduct.quantity = 1
            newCart = [...cart, selectedProduct]
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id)
            exiting.quantity = exiting.quantity + 1
            newCart = [...rest, exiting]

        }
        setCart(newCart);
        addToDb(selectedProduct.id)
    }
    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    products.map(product => <Product key={products.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to='/orders'>
                        <button>Order Review</button>
                    </Link>

                </Cart>
            </div>
        </div>
    );
};

export default Shop;
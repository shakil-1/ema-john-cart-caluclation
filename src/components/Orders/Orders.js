import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/UseProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const [products, setPrducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const handelRemobeProduct  = product =>{
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id)
    }
    return (
        <div className='shop-container'>
           <div className="review-items-container">
            {
                cart.map(product => <ReviewItem key={product.id} product={product}
                handelRemobeProduct={handelRemobeProduct}
                >
                </ReviewItem>)
            }
           </div>
           <div className="cart-container">
               <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Orders;
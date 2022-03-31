import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb";


const  useCart = (products) => {
    const [cart, setCart] = useState([]);
    
    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id in storedCart){
            const adddedProduct = products.find(Product => Product.id === id)
            if(adddedProduct){
                const quantity = storedCart[id];
                adddedProduct.quantity = quantity;
                savedCart.push(adddedProduct);
            }
        }
        setCart(savedCart);
    },[products]);
    return [cart, setCart];
}

export default  useCart;
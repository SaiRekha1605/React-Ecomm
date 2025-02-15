import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductListItem from "../components/ProductListItem";
import { modifyItem, removeItem } from "../redux/reducer/Cart";
import { useNavigate } from 'react-router-dom';


export default function Cart() {
    const list = useSelector((state) => state.cart.list)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const incrementItem = (item) => {
        dispatch(modifyItem({ ...item, count: item.count + 1 }));
    };
    const decrementItem = (item) => {
        if (item.count === 1) {
            dispatch(removeItem(item))
        }
        else {
            dispatch(modifyItem({ ...item, count: item.count - 1 }));
        }
    };

    const removeItemFromCart = (item) => {
        dispatch(removeItem(item))
    };
    return (
        <>
            {list.length > 0 ? (
                <>
                    {list.map((item) => (
                        <ProductListItem
                            {...item}
                            key={item.id}
                            incrementItem={() => incrementItem(item)}
                            decrementItem={() => decrementItem(item)}
                            removeItem={() => removeItemFromCart(item)}
                        />
                    ))}
                    
                    <button className="btn btn-success" 
                    onClick={() => navigate('/checkout')}> Go To Checkout</button>
                </>
            ) : (<h3 className= "h5 mt-5" > No Items in the Cart </h3>
            )}

        </>
    );
}
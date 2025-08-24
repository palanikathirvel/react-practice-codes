import Farmercustomerdetails from './Farmercustomerdetails';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from "axios";

function Farmercart({ cart, closecart, cartt = [], addcart }) {

    const [total, settotal] = useState(0);
    const [quantities, setQuantities] = useState({});
    const [cartitems, setcartitems] = useState([]);
    const [loading, setloading] = useState(true);

    const removecart = async (iid) => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.delete(`http://localhost:8085/api/v1/cart/deletecart/${iid}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            alert("Item removed from cart");

            setcartitems((prevItems) => prevItems.filter(item => item.cartitemid !== iid));
            setQuantities((prev) => {
                const updated = { ...prev };
                delete updated[iid];
                return updated;
            });
        } catch (err) {
            console.error(err);
            alert("Item not removed");
        }
    };

    const handleQuantityChange = (itemid, value) => {
        if (value < 1) return;

        setQuantities(prev => ({
            ...prev,
            [itemid]: value
        }));

        setcartitems(prevItems =>
            prevItems.map(item =>
                item.cartitemid === itemid
                    ? { ...item, productquantity: value, totalprice: value * item.priceperquantity }
                    : item
            )
        );

        const token = localStorage.getItem("token");
        axios.put(`http://localhost:8085/api/v1/cart/updatequantity/${itemid}`, { quantity: value }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).catch(err => {
            console.error("Failed to update quantity", err);
        });
    };

    useEffect(() => {
        const cartview = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await axios.get("http://localhost:8085/api/v1/cart/viewcart", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setcartitems(response.data);

                const initialQuantities = {};
                response.data.forEach(item => {
                    initialQuantities[item.cartitemid] = item.productquantity;
                });
                setQuantities(initialQuantities);
            } catch (err) {
                console.error("Error fetching cart", err);
            } finally {
                setloading(false);
            }
        };
        cartview();
    }, []);

    if (loading) return <div>Cart loading...</div>;

    const totalAmount = cartitems.reduce((sum, item) => {
        const qty = quantities[item.cartitemid] || item.productquantity;
        return sum + qty * item.priceperquantity;
    }, 0);

    return (
        cart && (
            <div className={`bg-green-400 w-full h-full md:w-3/4 lg:w-1/2 fixed right-0 z-[999] overflow-y-auto `}>
                <div className="absolute top-4 right-2 ">
                    <svg className="fill-black " onClick={closecart} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                    </svg>
                </div>

                <h1 className="font-bold text-lg text-center font-serif mx-2 mt-8 md:mx-10 md:text-2xl lg:text-3xl">
                    Cart items
                </h1>

                <div className="bg-yellow-300 pt-2 px-2 mt-3 md:mt-8 lg:p-8">
                    {cartitems.length > 0 ? (
                        cartitems.map((product) => (
                            <div key={product.cartitemid} className="grid grid-cols-1 gap-4 p-4 border-b border-gray-300 md:grid-cols-3">
                                <div className="flex justify-center md:justify-start">
                                    <img
                                        src={product.productphoto}
                                        className="w-1/3 md:w-1/2 rounded-xl"
                                        alt={product.productname}
                                    />
                                </div>

                                <div className="flex flex-col justify-center">
                                    <p className="mt-2 font-bold text-lg">Name: {product.productname}</p>
                                    <p className="text-md">Price: {product.priceperquantity}</p>
                                    <p className="text-md">Quantity: {quantities[product.cartitemid]}</p>
                                    <input
                                        className="w-10 text-center"
                                        type="number"
                                        value={quantities[product.cartitemid] || product.productquantity}
                                        onChange={(e) => handleQuantityChange(product.cartitemid, parseInt(e.target.value))}
                                        min="1"
                                    />
                                    <p className="text-md">Seller: {product.productsellername}</p>
                                </div>

                                <div className="absolute right-2">
                                    <svg
                                        className="fill-black cursor-pointer"
                                        onClick={() => removecart(product.cartitemid)}
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="24px"
                                        viewBox="0 -960 960 960"
                                        width="24px"
                                        fill="#5f6368"
                                    >
                                        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                                    </svg>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center font-bold text-xl md:text-2xl">No items</p>
                    )}
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center mt-4 p-4 bg-green-500 rounded-lg text-white text-xl">
                    <h4>Total amount: Rs. {totalAmount}</h4>
                    <Link to='/Farmercustomerdetails'>
                        <button className="mt-2 md:mt-0 border border-white bg-black text-white p-2 rounded-2xl hover:bg-white hover:text-black">
                            Place Order
                        </button>
                    </Link>
                </div>
            </div>
        )
    );
}

export default Farmercart;

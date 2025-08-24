
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Farmercustomerdetails() {
    const[cartitems,setcartitems]=useState([]);
    const navigate=useNavigate();
    const[paymethod,setpaymethod]=useState("");
    const[deliveryaddress,setdeliveryaddress]=useState("");
    const fetchcart=async()=>{
        const token=localStorage.getItem("token");
        try{
            const res=await axios.get("http://localhost:8085/api/v1/cart/viewcart",{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            });
            setcartitems(res.data);
        }
        catch(error){
            console.log(error);
            alert("error");
        }
    }
    fetchcart();
    const handlecheckout=async()=>{
        const token=localStorage.getItem("token");
        if(!deliveryaddress.trim()){
            alert("Enter valid address");
            return;
        }
        try{
            const res=await axios.post(`http://localhost:8085/api/v1/cart/cartcheckout?paymethod=${encodeURIComponent(paymethod)}&deliveryaddress=${encodeURIComponent(deliveryaddress)}`,null,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            });
        
            alert("checkout successfull");
            navigate('/')
            setcartitems([]);
            setdeliveryaddress(" ");
          

        }
        catch(err){
            console.log(err);
            alert(err);
        }
    }
    return (
        <>
            <div className="absolute w-full h-full bg-yellow-400 z-[1000] p-8 top-0 left-0 overflow-auto">
                <form className=" my-[10%] max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
                    <h1 className="font-bold text-3xl mb-6 text-center text-gray-800">Customer Details</h1>

                    <div className="p-4 max-w-xl mx-auto bg-white rounded-xl shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

                        {cartitems.length === 0 ? (
                            <p>Your cart is empty.</p>
                        ) : (
                            cartitems.map((item) => (
                                <div key={item.cartitemid} className="mb-2 border-b pb-2">
                                    <p>
                                        <strong>{item.productname}</strong> - Qty: {item.productquantity} - ₹{item.totalprice}
                                    </p>
                                </div>
                            ))
                        )}
                       
</div>

                        <div className="text-left mb-5">
                            <label className="font-semibold text-gray-700 mb-2 block">Payment method:</label>
                            <select value={paymethod} className="p-3 rounded-xl w-full border border-gray-300" onChange={(e)=>setpaymethod(e.target.value)}>
                                <option>Cash on delivery</option>
                                <option>Card</option>
                                <option>Visa</option>
                            </select>
                        </div>

                        <textarea
                            placeholder="Delivery location"
                            className="placeholder-gray-600 p-3 rounded-xl text-center w-full h-32 resize-none border border-gray-300"
                        value={deliveryaddress} onChange={(e)=>setdeliveryaddress(e.target.value)}></textarea>

                        <button
                            type="submit"
                            className="bg-black ml-[40%] mt-5 text-white font-semibold p-4 rounded-xl hover:bg-white hover:text-black border hover:border-black transition"
                        onClick={handlecheckout}>
                            Proceed to Pay
                        </button>
                    
                </form>
            </div>
        </>
    );
}

export default Farmercustomerdetails;

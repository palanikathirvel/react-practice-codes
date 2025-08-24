import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';
axios.defaults.withCredentials = true;
function Cartdetails() {
    const location = useLocation();
    const { item } = location.state || {};
    const addtocart=async(item)=>{
        const token=localStorage.getItem("token");
        if(!token){
            alert("please login first");
            return;
        }
        const gets={
            productid:item.id,
            productcategory:item.category,
            productquantity:1,
            productname:item.name,
            productsellername:item.shop,
            productphoto:item.src
            
        };
        try{
            await axios.post("http://localhost:8085/api/v1/cart/addtocart",
                gets,{
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            alert("added to cart successfully");
        }
        catch(err){
            console.error("error adding to cart:", err.response?.data || err.message);
            alert("fail to add to cart");
        }
    }
   

    if (!item) {
        return <div className="text-center py-10 text-xl font-semibold">No item selected!</div>;
    }

    return (
        <>
            <div className="absolute left-0 w-full top-0 z-[9999999] bg-yellow-100 min-h-screen px-4 py-8">
               
                <div className="bg-green-500 text-white text-3xl font-bold text-center py-6 rounded-lg shadow-md mb-10">
                    Product Details
                </div>

                <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl p-8 flex flex-col lg:flex-row gap-8 items-center" id={item.id}>

                  
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <img
                            src={item.src}
                            alt={item.name}
                            className="rounded-3xl h-64 w-full object-contain transform hover:scale-105 transition duration-300 shadow-md"
                        />
                    </div>

                
                    <div className="w-full lg:w-1/2 text-left space-y-6">
                        <h3 className="text-4xl font-bold text-gray-800">{item.name}</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, repellendus vitae.
                        </p>
                        <h5 className="text-xl font-semibold text-green-600">Price: Rs. {item.amt}</h5>
                        <h5 className="text-lg font-medium text-gray-700">Seller: {item.shop}</h5>
                        <h6 className="text-lg text-gray-600">Transport Method: <span className="font-semibold">On-road</span></h6>
                        <h6 className="text-lg text-gray-600">Contact No: <span className="font-semibold">{item.contact}</span></h6>

                        
                            <button className="mt-4 bg-black text-white px-6 py-3 text-lg rounded-xl hover:bg-green-600 hover:text-white transition w-full sm:w-auto" onClick={()=>addtocart(item)}>
                                Add cart
                            </button>
                        
                    </div>
                </div>

          
                <div className="absolute top-6 right-6 cursor-pointer">
                    <svg
                        className="fill-black w-8 h-8 hover:scale-110 transition"
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
        </>
    );
}

export default Cartdetails;

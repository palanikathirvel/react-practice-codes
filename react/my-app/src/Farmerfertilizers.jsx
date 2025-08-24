import React, { useState, useEffect } from 'react';
import fertidata from './itemfertilizers.json';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Farmerfertilizers({ openfertii, openfertilizers, cartt = [], addcart }) {
    const navigate = useNavigate();
    const [ferti, sertiferti] = useState(fertidata);
const[search,setsearch]=useState("");
const addtocart=async(fer)=>{
    const token=localStorage.getItem("token");
    if(!token){
        alert("please login first");
    }
    const payload={
        productid:fer.ferid,
        productcategory:"fertilizer",
        productquantity:1,
        productname:fer.fername,
        productsellername:fer.fersellername,
        productphoto:fer.ferurl
    };
    try{
        await axios.post("http://localhost:8085/api/v1/cart/addtocart",payload,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        });
        alert("added to cart successfully")
    }
    catch(err){
        console.log(err);
        alert("failed to add cart");
    }
}
const searchferti=async(value)=>{
    try{
        const res=await axios.get("http://localhost:8085/api/v1/fer/searchfer?search="+value);
        sertiferti(res.data);
    }
    catch(err){
        console.log(err);
    }
}
    useEffect(() => {
        if(search){
            searchferti(search);
        if (openfertii) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    }
        else{
            axios.get("http://localhost:8085/api/v1/fer/getfer").then(
                res=>{
                    sertiferti(res.data);
                    console.log(res.data);
                }
            ).catch(err=>console.log(err));
            if(openfertii){
                window.scrollTo({
                    top:0,
                    behaviour:'smooth',
                });
            }
        }
    }, [search,openfertii]);

    function adddcart(item) {
        addcart([...cartt, item]);
    }

    function removecart(item) {
        addcart(cartt.filter((cartItem) => cartItem.id !== item.id));
    }

    function changeimage(item) {
        navigate('/Cartdetails', { state: { item } });
    }
    const onImageClick=(fer)=>{
        navigate("/Cartdetails",{
            state:{
                item:{
                    id:fer.ferid,
                    name:fer.fername,
                    src:fer.ferurl,
                    amt:fer.ferprice,
                    shop:fer.fersellername,
                    category:"fertilizers",
                    contact:fer.fersellerphno
                }
            }
     } )
    }


    return (
        <>
            <div className={`bg-green-200 absolute top-0 right-0 left-0 z-50 ${openfertilizers ? 'block' : 'hidden'}`}>
                <div className="bg-yellow-400 text-black text-3xl rounded-2xl p-4 text-center font-bold">Fertilizers</div>
                <div className="absolute right-2 top-2">
                    <svg
                        className="fill-black cursor-pointer"
                        onClick={openfertii}
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#5f6368"
                    >
                        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                    </svg>
                </div>
                <div>
                    <input type="text" value={search} class="p-3 w-1/2 m-5 ml-1/3  border-rounded bg-white rounded-md mx-40" placeholder="search" onChange={(e) => { setsearch(e.target.value) }}></input>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {ferti.map((fer,id) => (
                        <div key={fer.id} className="bg-green-300 p-4 rounded-lg">
                            <img
                                src={fer.ferurl}
                                alt={fer.fername}
                                className="rounded transform hover:scale-110 transition duration-300 w-full h-48 object-center overflow-hidden cursor-pointer"
                                onClick={() => onImageClick(fer)}
                            />

                            <div className="bg-green-400 text-center mt-2 p-2 rounded transition duration-500 ease-in-out hover:bg-yellow-400">
                                <p className="font-bold">Name: {fer.fername}</p>
                                <p>Rs. {fer.ferprice}</p>
                                <div className="flex flex-wrap space-x-9">
                                    <p className="font-semibold">Seller: {fer.fersellername}</p>
                                    {cartt.some((item) => item.id === fer.id) ? (
                                        <p
                                            className="cursor-pointer text-red-600 font-bold"
                                            onClick={() => removecart(fer)}
                                        >
                                            Remove
                                        </p>
                                    ) : (
                                        <p
                                            className="cursor-pointer text-green-600 font-bold"
                                            onClick={() => addtocart(fer)}
                                        >
                                            Add to Cart
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Farmerfertilizers;

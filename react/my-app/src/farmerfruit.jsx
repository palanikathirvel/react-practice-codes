import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import fruitdata from './itemfruit.json';
import Farmercart from './Farmercart.jsx';
import axios from 'axios';

function Farmerfruit({ openfruit, openfruite, cartt = [], addcart }) {
    const [fruit, setfruit] = useState([]);
    const [search,setsearch]=useState("");
    const navigate = useNavigate();
    const addtocart=async(fru)=>{
        const token=localStorage.getItem("token");
        if(!token){
            alert("please login first");
        }
        const payload={
            productid:fru.fruid,
            productcategory:"fruit",
            productquantity:1,
            productname:fru.fruname,
            productsellername:fru.frusellername,
            productphoto:fru.fruurl
        };
        try{
            await axios.post("http://localhost:8085/api/v1/cart/addtocart",payload,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            });
            alert("added to cart successfully");
        }
        catch(err){
            console.log(err);
            alert("failed to add cart");
        }
    };
const searchfruit =async(value)=>{
    try{
        const res=await
         axios.get("http://localhost:8085/api/v1/fruit/searchfruit?search="+value);
        setfruit(res.data);
    }
    catch(err){
        console.log(err);
    }
}
    useEffect(() => {
        if(search){
            searchfruit(search);
            if (openfruit) {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
        }}
       else{
     axios.get("http://localhost:8085/api/v1/fruit/getfruit").then(
        res =>{
            setfruit(res.data);
            console.log(res.data);
        }
     ).catch(err=>console.log(err));
        if (openfruit) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    }
    
    }, [search,openfruit]);

    function adddcart(item) {
        addcart([...cartt, item]);
    }

    function removecart(item) {
        addcart(cartt.filter((cartItem) => cartItem.id !== item.id));
    }

    function handleImageClick(item) {
        navigate('/Cartdetails', { state: { item } });
    }
    const onImageClick=(fru)=>{
        navigate("/Cartdetails",{
            state:{
                item:{
                    id:fru.fruid,
                    name:fru.fruname,
                    src:fru.fruurl,
                    amt:fru.fruprice,
                    shop:fru.frusellername,
                    category:"fruit",
                    contact:fru.frusellerphno
                }
            }
        })
    }

    return (
        <>
            <div className={`bg-green-200 absolute top-0 right-0 left-0 z-50 ${openfruit ? 'block' : 'hidden'}`}>
                <div className="bg-yellow-400 text-black text-3xl rounded-2xl p-4 text-center font-bold">Fruits</div>
                <div className="absolute right-2 top-2">
                    <svg
                        className="fill-black cursor-pointer"
                        onClick={openfruite}
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
                    {fruit.map((fru,id) => (
                        <div key={fru.id} className="bg-green-300 p-4 rounded-lg">
                            <img
                                src={fru.fruurl}
                                alt={fru.fruname}
                                className="rounded transform hover:scale-110 transition duration-300 w-full h-48 object-center overflow-hidden cursor-pointer"
                                onClick={() => onImageClick(fru)}
                            />
                            <div className="bg-green-400 text-center mt-2 p-2 rounded transition duration-500 ease-in-out hover:bg-yellow-400">
                                <p className="font-bold">Name: {fru.fruname}</p>
                                <p>Rs. {fru.fruprice}</p>
                                <div className="flex justify-between items-center space-x-5">
                                    <p className="font-semibold">Seller: {fru.frusellername}</p>

                                    {cartt.some((item) => item.id === fru.id) ? (
                                        <p
                                            className="cursor-pointer text-red-600 font-bold"
                                            onClick={() => removecart(fru)}
                                        >
                                            Remove
                                        </p>
                                    ) : (
                                        <p
                                            className="cursor-pointer text-green-600 font-bold"
                                            onClick={() => addtocart(fru)}
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

export default Farmerfruit;

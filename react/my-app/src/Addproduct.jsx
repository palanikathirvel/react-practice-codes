import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Addproduct = () => {
    const[vegname,setvegname]=useState("");
    const[vegprice,setvegprice]=useState("");
    const[vegurl,setvegurl]=useState("");
    const[vegsellername,setvegsellername]=useState("");
    const[vegsellerphno,setvegsellerphno]=useState("");
    const addproduct=async(event)=>{
        event.preventDefault();
        try{
            axios.post("http://localhost:8085/api/v1/vegproducts/saveveg",{
                vegname:vegname,
                vegprice:vegprice,
                vegurl:vegurl,
                vegsellername:vegsellername,
                vegsellerphno:vegsellerphno
            }).then(console.log("vegetable added successfully"));
            alert("vegetable added successfully");
            {
                setvegname(""),
                setvegprice(""),
                setvegurl(""),
                setvegsellername(""),
                setvegsellerphno("")
            }
        }
        catch(err){
            alert(err);
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-green-100 p-4">
            <form className="bg-green-300 p-8 rounded-lg shadow-md w-full max-w-xl space-y-4">
                <h2 className="text-2xl font-bold text-center mb-4">Add Vegetable Products</h2>

                <div className="flex flex-col">
                    <label className="mb-1 font-medium">Enter product name:</label>
                    <input
                        type="text" value={vegname}
                        className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" onChange={(e) => { setvegname(e.target.value) }}
                    />
                </div>

                <div className="flex flex-col"> 
                    <label className="mb-1 font-medium">Enter price:</label>
                    <input
                        type="number" value={vegprice}
                        className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" onChange={(e)=>{setvegprice(e.target.value)}}
                    />
                </div>

                <div className="flex flex-col">
                    <label className="mb-1 font-medium">Enter image URL:</label>
                    <input
                        type="text" value={vegurl}
                        className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" onChange={(e) => { setvegurl(e.target.value) }}
                    />
                </div>

                <div className="flex flex-col">
                    <label className="mb-1 font-medium">Enter seller name:</label>
                    <input
                        type="text" value={vegsellername}
                        className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" onChange={(e) => { setvegsellername(e.target.value) }}
                    />
                </div>

                <div className="flex flex-col">
                    <label className="mb-1 font-medium">Enter seller phone number:</label>
                    <input
                        type="text" value={vegsellerphno}
                        className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" onChange={(e) => { setvegsellerphno(e.target.value) }}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-black text-white p-3 rounded hover:bg-white hover:text-black border border-black transition duration-300"
                 onClick={addproduct}>
                    Add product
                </button>
            </form>
        </div>
    );
};

export default Addproduct;

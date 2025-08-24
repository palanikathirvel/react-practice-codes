import React from 'react';
import axios from 'axios';
import { useState } from 'react';
const Feradder = () => {
    const [fername, setfername] = useState("");
    const [ferprice, setferprice] = useState();
    const [ferurl, setferurl] = useState("");
    const [fersellername, setfersellername] = useState("");
    const [fersellerphno, setfersellerphno] = useState("");
  const addfer=async(event)=>{

    event.preventDefault();
    try{
        await axios.post("http://localhost:8085/api/v1/fer/savefer",{
            fername:fername,
            ferprice:ferprice,
            ferurl:ferurl,
            fersellername:fersellername,
            fersellerphno:fersellerphno
        }).then(console.log("fertilizer added successfully"));
        alert("fertilizer added successfully");
        {
        setfername("");
        setferprice("");
        setferurl("");
        setfersellername("");
        setfersellerphno("");
        }
        
    }
    catch(err){
        console.log(err);
    }
  }
    return (
        <div className="min-h-screen flex items-center justify-center bg-green-100 p-4">
            <form className="bg-green-300 p-8 rounded-lg shadow-md w-full max-w-xl space-y-4">
                <h2 className="text-2xl font-bold text-center mb-4">Add Fertilizers</h2>

                <div className="flex flex-col">
                    <label className="mb-1 font-medium" >Enter product name:</label>
                    <input
                        type="text" value={fername}
                        className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" onChange={(e) => { setfername(e.target.value) }}
                    />
                </div>

                <div className="flex flex-col">
                    <label className="mb-1 font-medium">Enter price:</label>
                    <input value={ferprice}
                        type="number" 
                        className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" onChange={(e) => { setferprice(e.target.value) }}
                    />
                </div>

                <div className="flex flex-col">
                    <label className="mb-1 font-medium">Enter image URL:</label>
                    <input
                        type="text" value={ferurl}
                        className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" onChange={(e) => { setferurl(e.target.value) }}
                    />
                </div>

                <div className="flex flex-col">
                    <label className="mb-1 font-medium">Enter seller name:</label>
                    <input
                        type="text" value={fersellername}
                        className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" onChange={(e) => { setfersellername(e.target.value) }}
                    />
                </div>

                <div className="flex flex-col">
                    <label className="mb-1 font-medium">Enter seller phone number:</label>
                    <input
                        type="text" value={fersellerphno}
                        className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" onChange={(e) => { setfersellerphno(e.target.value) }}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-black text-white p-3 rounded hover:bg-white hover:text-black border border-black transition duration-300" onClick={addfer}
                    >
                    Add product
                </button>
            </form>
        </div>
    );
};

export default Feradder;

//import React from 'react';
import { useState } from 'react';
import axios from 'axios';


const Fruitsadder = () => {
    const [fruname, setfruname] = useState("");
    const [fruprice, setfruprice] = useState("");
    const [fruurl, setfruurl] = useState("");
    const [frusellername, setfrusellername] = useState("");
    const [frusellerphno, setfrusellerphno] = useState("");
    const getfruit = async (event) => {
        event.preventDefault();
        try {
            axios.post("http://localhost:8085/api/v1/fruit/savefruit", {
                fruname: fruname,
                fruprice: fruprice,
                fruurl: fruurl,
                frusellername:frusellername,
                frusellerphno:frusellerphno

            }).then(console.log("fruit add successfully"));
            alert("fruit addedd successfully");
            {
                setfruname(""),
                setfruprice(""),
                setfruurl(""),
                setfrusellername(""),
                setfrusellerphno("")
            }
        }
        catch(err){
            alert(err);
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-green-100 p-4">
            <form className="bg-green-300 p-8 rounded-lg shadow-md w-full max-w-xl space-y-4">
                <h2 className="text-2xl font-bold text-center mb-4">Add fruit Products</h2>

                <div className="flex flex-col">
                    <label className="mb-1 font-medium">Enter product name:</label>
                    <input
                        type="text" value={fruname}
                        className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" onChange={(e) => { setfruname(e.target.value) }}
                    />
                </div>

                <div className="flex flex-col">
                    <label className="mb-1 font-medium">Enter price:</label>
                    <input
                        type="number" value={fruprice}
                        className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" onChange={(e) => { setfruprice(e.target.value) }}
                    />
                </div>

                <div className="flex flex-col">
                    <label className="mb-1 font-medium">Enter image URL:</label>
                    <input
                        type="text" value={fruurl}
                        className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" onChange={(e) => { setfruurl(e.target.value) }}
                    />
                </div>

                <div className="flex flex-col">
                    <label className="mb-1 font-medium">Enter seller name:</label>
                    <input
                        type="text" value={frusellername}
                        className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" onChange={(e) => { setfrusellername(e.target.value) }}
                    />
                </div>

                <div className="flex flex-col">
                    <label className="mb-1 font-medium">Enter seller phone number:</label>
                    <input
                        type="text" value={frusellerphno}
                        className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" onChange={(e) => { setfrusellerphno(e.target.value) }}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-black text-white p-3 rounded hover:bg-white hover:text-black border border-black transition duration-300"
                onClick={getfruit}>
                    Add product
                </button>
            </form>
        </div>
    );
};

export default Fruitsadder;

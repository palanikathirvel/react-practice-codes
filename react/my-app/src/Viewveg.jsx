import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';
const Viewveg = () => {
    const[veglist,setveglist]=useState([]);
    const name = localStorage.getItem("customername");
    useEffect(() => {
        fetchVegetables();
    }, []);
    const fetchVegetables=async ()=>{
try{
        const res=await axios.get("http://localhost:8085/api/v1/vegproducts/getspecificveg",{
            params:{
                farmername:name,
            },

        });
setveglist(res.data);
    }
    catch(err){
        console.log(err);
        alert(err);
    }
}
const handleDelete=async(idd)=>{
    await axios.delete(`http://localhost:8085/api/v1/vegproducts/deleteveg/${idd}`);
    alert("deleted successfully");
}
    
    return (
        <div className="bg-green-200 p-6  shadow-lg rounded-xl">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-3">Your Vegetables</h2>

            {veglist.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm text-gray-700 border border-gray-200 rounded-md">
                        <thead className="bg-yellow-300">
                            <tr>
                                <th className="text-left px-6 py-3 font-medium uppercase tracking-wider border-b">ID</th>
                                <th className="text-left px-6 py-3 font-medium uppercase tracking-wider border-b">Name</th>
                                <th className="text-left px-6 py-3 font-medium uppercase tracking-wider border-b">Price</th>
                                <th className="text-left px-6 py-3 font-medium uppercase tracking-wider border-b">Seller</th>
                                <th className="text-center px-6 py-3 font-medium uppercase tracking-wider border-b">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {veglist.map((veg) => (
                                <tr key={veg.id} className="hover:bg-gray-50 transition duration-150">
                                    <td className="px-6 py-4">{veg.vegid}</td>
                                    <td className="px-6 py-4 font-semibold text-gray-800">{veg.vegname}</td>
                                    <td className="px-6 py-4 text-green-600 font-medium">₹{veg.vegprice}</td>
                                    <td className="px-6 py-4">{veg.vegsellername}</td>
                                    <td className="px-6 py-4 text-center">
                                        <button
                                            onClick={() => handleDelete(veg.vegid)}
                                            className="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded-md shadow-sm transition duration-150"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="text-center text-gray-500 mt-10">
                    <p className="text-lg">No vegetables found.</p>
                </div>
            )}
        </div>
    );

}
export default Viewveg
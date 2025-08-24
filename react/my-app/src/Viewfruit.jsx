import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';
const Viewfruit = () => {
    const [fruitlist, setfruitlist] = useState([]);
    const name = localStorage.getItem("customername");
    useEffect(() => {
        fetchfruit();
    }, []);
    const fetchfruit= async () => {
        try {
            const res = await axios.get("http://localhost:8085/api/v1/fruit/getspecificfruit", {
                params: {
                    farmername: name,
                },

            });
            setfruitlist(res.data);
        }
        catch (err) {
            console.log(err);
            alert(err);
        }
    }
    const handleDelete = async (idd) => {
        await axios.delete(`http://localhost:8085/api/v1/fruit/deletefruit/${idd}`);
        alert("deleted successfully");
    }

    return (
        <div className="bg-green-200 p-6  shadow-lg rounded-xl">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 border-b pb-3">Your fruits</h2>

            {fruitlist.length > 0 ? (
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
                            {fruitlist.map((veg) => (
                                <tr key={veg.id} className="hover:bg-gray-50 transition duration-150">
                                    <td className="px-6 py-4">{veg.fruid}</td>
                                    <td className="px-6 py-4 font-semibold text-gray-800">{veg.fruname}</td>
                                    <td className="px-6 py-4 text-green-600 font-medium">₹{veg.fruprice}</td>
                                    <td className="px-6 py-4">{veg.frusellername}</td>
                                    <td className="px-6 py-4 text-center">
                                        <button
                                            onClick={() => handleDelete(veg.fruid)}
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
                    <p className="text-lg">No fruits found.</p>
                </div>
            )}
        </div>
    );

}
export default Viewfruit
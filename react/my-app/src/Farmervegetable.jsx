import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

axios.defaults.withCredentials = true;

function Farmervegetable({ openveg, openvege }) {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [veges, setVeges] = useState([]);

    const addToCart = async (veg) => {
        const token = localStorage.getItem("token");

        if (!token) {
            alert("Please log in first.");
            return;
        }

        const payload = {
            productid: veg.vegid,
            productcategory: "vegetable",
            productquantity: 1,
            productname: veg.vegname,
            productsellername: veg.vegsellername,
            productphoto: veg.vegurl
        };

        try {
            await axios.post("http://localhost:8085/api/v1/cart/addtocart", payload, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            alert("Added to cart successfully");
        } catch (error) {
            console.error("Error adding to cart:", error.response?.data || error.message);
            alert("Failed to add to cart");
        }
    };

    const searchVeg = async (value) => {
        try {
            const res = await axios.get(`http://localhost:8085/api/v1/vegproducts/searchveg?search=${value}`);
            setVeges(res.data);
        } catch (err) {
            console.log('Error during search:', err);
        }
    };

    useEffect(() => {
        if (search) {
            searchVeg(search);
        } else {
            axios.get("http://localhost:8085/api/v1/vegproducts/getveg")
                .then(res => {
                    setVeges(res.data);
                })
                .catch(err => console.log('Fetch error:', err));
        }

        if (openveg) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [search, openveg]);

    const onImageClick = (veg) => {
        navigate("/Cartdetails", {
            state: {
                item: {
                    id:veg.vegid,
                    name: veg.vegname,
                    src: veg.vegurl,
                    amt: veg.vegprice,
                    shop: veg.vegsellername,
                    category:"vegetable",
                    contact:veg.vegsellerphno
                }
            }
        });
    };

    return (
        <>
            <div className={`bg-green-200 min-h-screen w-screen absolute top-0 right-0 left-0 z-50 ${openveg ? 'block' : 'hidden'}`}>
                <div className="bg-yellow-400 text-black text-3xl rounded-2xl p-4 text-center font-bold">
                    Vegetables
                </div>

                {/* Close Button */}
                <div className="absolute right-5 top-5">
                    <svg
                        className="fill-black cursor-pointer"
                        onClick={openvege}
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                    >
                        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                    </svg>
                </div>

                {/* Search Box */}
                <div className="flex justify-center mt-5">
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search vegetables"
                        className="p-3 w-1/2 border rounded bg-white mx-40"
                    />
                </div>

                {/* Vegetable Grid */}
                <div className="grid gap-6 p-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {veges.map((veg) => (
                        <div key={veg.vegid} className="bg-green-300 p-4 rounded-lg">
                            <img
                                src={veg.vegurl}
                                alt={veg.vegname}
                                className="rounded transform hover:scale-110 transition duration-300 w-full h-48 object-cover cursor-pointer"
                                onClick={() => onImageClick(veg)}
                            />
                            <div className="bg-green-400 text-center mt-2 p-2 rounded hover:bg-yellow-400 transition">
                                <p className="font-bold text-lg">{veg.vegname}</p>
                                <p className="text-gray-700">Price: Rs.{veg.vegprice}</p>
                                <div className="flex flex-wrap justify-between items-center mt-2">
                                    <span className="text-sm font-semibold">Seller: {veg.vegsellername}</span>
                                    <button
                                        onClick={() => addToCart(veg)}
                                        className="bg-green-600 text-white px-3 py-1 rounded hover:bg-yellow-400 hover:text-black"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Farmervegetable;

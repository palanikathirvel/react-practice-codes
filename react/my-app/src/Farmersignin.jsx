import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Farmersignin() {
    const [customername, setcustomername] = useState("");
    const [customeremail, setcustomeremail] = useState("");
    const [customerpassword, setcustomerpassword] = useState("");
    const navigate = useNavigate();
const handlepage=()=>{
    navigate('/Farmerlogin');
}
    const customerregister = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:8085/api/v1/agro/savecustomer",
                {
                    customername: customername,
                    customeremail: customeremail,
                    customerpassword: customerpassword
                },
                {
                    withCredentials: true // ✅ This is essential for CORS with credentials
                }
            );
            console.log("login success", response.data);
            alert("Sign in successful");
            setcustomeremail("");
            setcustomername("");
            setcustomerpassword("");
            navigate('/Farmerlogin');
        } catch (err) {
            console.error("Signup error:", err);
            alert("Sign up failed: " + err.message);
        }
    };

    return (
        <div className="bg-green-300 absolute top-1 w-full h-screen z-[1001] pt-20">
            <h1 className="flex justify-center align-items-center text-6xl text-green-700">
                Agrobridge🌴
            </h1>
            <br />
            <div className="flex justify-center">
                <input
                    type="text"
                    placeholder="username"
                    value={customername}
                    className="text-black w-2/4 mt-4 bg-yellow-300 p-3 rounded-xl border border-green-500"
                    onChange={(e) => setcustomername(e.target.value)}
                />
            </div>
            <div className="flex justify-center">
                <input
                    type="text"
                    placeholder="useremail"
                    value={customeremail}
                    className="text-black w-2/4 mt-4 bg-yellow-300 p-3 rounded-xl border border-green-500"
                    onChange={(e) => setcustomeremail(e.target.value)}
                />
            </div>
            <div className="flex justify-center">
                <input
                    type="password"
                    placeholder="password"
                    value={customerpassword}
                    className="text-black w-2/4 mt-4 bg-yellow-300 p-3 rounded-xl border border-green-500"
                    onChange={(e) => setcustomerpassword(e.target.value)}
                />
            </div>

            <button className="bg-green-600 absolute left-1/4 mt-5 px-6 p-3 rounded hover:bg-yellow-300" onClick={handlepage}>
                login
            </button>
            <button
                className="bg-green-600 absolute mt-5 left-1/2 ml-20 px-6 p-3 rounded hover:bg-yellow-300"
                onClick={customerregister}
            >
                sign up
            </button>
        </div>
    );
}

export default Farmersignin;

import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Farmerlogin({ login }) {
    const [customeremail, setcustomeremail] = useState("");
    const [customerpassword, setcustomerpassword] = useState("");
    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [fadeOut, setFadeOut] = useState(false);
    const [logincustomername,setlogincustomername]=useState("");
    const navigate = useNavigate();

    const customerlogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:8085/api/v1/agro/login",
                {
                    customeremail: customeremail,
                    customerpassword: customerpassword
                },
                {
                    withCredentials: true 
                }
            );

            if (response.data) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('customername',response.data.customerName);
                setErrorMessage(response.data.message);
                setlogincustomername(response.data.customerName);
                alert(response.data.customerName + "Logged in successfully");
                navigate('/');
                setSuccess(true);
                setErrorMessage("");
                setFadeOut(true);

                setTimeout(() => {
                    navigate(`/`);
                }, 2000);
                console.log("Login success");
            } else {
                setSuccess(false);
                setErrorMessage(response.data.message || "Invalid email or password");
            }
        } catch (err) {
            console.error(err);
            setSuccess(false);
            setErrorMessage("Login failed: " + (err.response?.data?.message || err.message));
        }
    };

    useEffect(() => {
       
        if (login) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [login]);
    const handlelogout=async()=>{
        try{
            const response=await axios.post("http://localhost:8085/api/v1/agro/logout");
            localStorage.removeItem('token');
            localStorage.removeItem('customername');
            navigate('/')
        }
        catch(err){
            console.log(err);
            alert("logout failed");
        }
    }

    return (
        <div className={`bg-green-300 absolute top-1 w-full h-screen z-50 pt-20 transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
            <h1 className="flex justify-center items-center text-6xl text-green-700">Agrobridge🌴</h1>
            <br />

            {errorMessage && (
                <div className="bg-red-500 text-white text-center mx-auto w-2/4 p-3 rounded-xl mb-4">
                    {errorMessage}
                </div>
            )}

            <div className="flex justify-center">
                <input
                    type="text"
                    placeholder="Email"
                    value={customeremail}
                    className="text-black w-2/4 mt-4 bg-yellow-300 p-3 rounded-xl border border-green-500"
                    onChange={(e) => setcustomeremail(e.target.value)}
                />
            </div>

            <div className="flex justify-center">
                <input
                    type="password"
                    placeholder="Password"
                    value={customerpassword}
                    className="text-black w-2/4 mt-4 bg-yellow-300 p-3 rounded-xl border border-green-500"
                    onChange={(e) => setcustomerpassword(e.target.value)}
                />
            </div>

            <div className="flex justify-center">
                <select className="text-black w-2/4 mt-4 bg-yellow-300 p-3 rounded-xl border border-green-500">
                    <option>Farmer</option>
                    <option>Customer</option>
                    <option>Industry people</option>
                </select>
            </div>

            <div className="flex justify-center mt-5">
                <button
                    className="bg-green-600 px-6 p-3 rounded hover:bg-yellow-300"
                    onClick={customerlogin}
                >
                    Login
                </button>
                <Link to='/Farmersignin'>
                    <button className="bg-green-600 px-6 p-3 rounded ml-5 hover:bg-yellow-300">
                        Sign in
                    </button>
                </Link>
                <button className="bg-green-600 px-6 p-3 rounded ml-5 hover:bg-yellow-300" onClick={handlelogout}>
                    logout
                </button>
            </div>
        </div>
    );
}

export default Farmerlogin;

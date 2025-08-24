import Farmerpng from './Farmerpng.jpeg';
import './Farmerhome.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Farmercart from './Farmercart.jsx';
import Farmervegetable from './Farmervegetable.jsx';
import Farmerimage from './Farmerimage.jsx';
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useEffect } from 'react';
function Farmerhome({ cartt, addcart }) {
    const navigate = useNavigate();
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isCartOpen, setCartOpen] = useState(false);
    const [loggername,setloggername]=useState("login first");
    
const {name}=useParams();
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const toggleCart = () => {
        setCartOpen(!isCartOpen);
    };

    const handleSellClick = () => {
        navigate('/Category');
    };
    const handleimageclick = () => {
        navigate('/Farmerimage');
    };
    useEffect(() => {
        const name = localStorage.getItem('customername');
        if (name) {
            setloggername(name);
        } else {
            setloggername("Login First");
        }
    }, []);

    return (
        <>
            <Farmercart cart={isCartOpen} closecart={toggleCart} cartt={cartt} addcart={addcart} />

            {/* Sidebar */}
            <div className={`fixed top-0 left-0 h-full w-1/2 bg-green-400 p-10 transition-transform duration-500 z-50 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <h1 className="text-4xl text-yellow-200 text-center">Agrobridge🌴</h1>
                <div className="absolute right-2 top-2">
                    <svg onClick={toggleSidebar} className="fill-black cursor-pointer" xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" viewBox="0 -960 960 960">
                        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                    </svg>
                </div>
                <ul className="mt-10">
                    <NavLink to='/Farmerhomeabout'><li className="p-3 text-2xl hover:bg-yellow-400 hover:rounded-md">Home</li></NavLink>
                    <NavLink to='/Farmerservice'><li className="p-3 text-2xl hover:bg-yellow-400 hover:rounded-md">Services</li></NavLink>
                    <NavLink to='/Farmerabout'><li className="p-3 text-2xl hover:bg-yellow-400 hover:rounded-md">About us</li></NavLink>
                    <NavLink to='/Farmerproduct'><li className="p-3 text-2xl hover:bg-yellow-400 hover:rounded-md">Products</li></NavLink>
                    <NavLink to='/Farmerpartner'><li className="p-3 text-2xl hover:bg-yellow-400 hover:rounded-md">Partners</li></NavLink>
                </ul>
            </div>

            {/* Main Hero Section */}
            <div className="bg-gradient-to-r  from-green-300 via-yellow-300 to-green-600 w-full h-screen flex items-center p-6">
                <div className="flex flex-col ml-10 ">
                   
                    <h1 className="naachi-title">
                       
                        <br></br>
                        {["A", "G", "R", "O", "--", "B", "R", "I", "D", "G", "E"].map((letter, index) => (
                            <span key={index}>{letter}</span>
                        ))}
                    </h1>
                    <p className="text-xl mt-2">Bridging the gap between farmers and customers....!</p>
                    <div className="flex mt-4">
                        <button className="bg-black text-white px-4 py-2 rounded hover:bg-white hover:text-black mr-4" onClick={handleSellClick}>Sell Products</button>
                        <button className="bg-black text-white px-4 py-2 rounded hover:bg-white hover:text-black" onClick={handleimageclick}>Buy Products</button>
                    </div>
                </div>
                <img src={Farmerpng} alt="Farmer" className="w-1/2 h-auto ml-5" />
            </div>

            {/* Sidebar Toggle Icon */}
            <div className="fixed top-5 left-3 z-50 cursor-pointer" onClick={toggleSidebar}>
                <svg className="fill-black size-8" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960">
                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                </svg>
            </div>

            {/* Cart Icon */}
            <div className="fixed top-5 right-[29%] z-50 cursor-pointer" onClick={toggleCart}>
                <svg className="fill-black size-8 mr-5" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                    <path d="M440-600v-120H320v-80h120v-120h80v120h120v80H520v120h-80ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z" />
                </svg>
            </div>
<div class="fixed font-bold bg-black text-white p-2 rounded top-4 text-xl right-[13%] hover:bg-white hover:text-black pointer:cursor" onClick={()=>{navigate('/Farmerlogin')}}>
    <h1>
        {loggername}
    </h1>
</div>
            {/* Sign In Icon */}
            <div className="fixed top-5 right-10 z-50">
                <NavLink to='/Farmersignin'>
                    <svg className="fill-black size-8" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                        <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
                    </svg>
                </NavLink>
            </div>

            <Farmervegetable addcart={addcart} />
        </>
    );
}

export default Farmerhome;

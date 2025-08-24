import React from 'react'
import ProductDetailsAgro from './ProductDetailsAgro';
import { useNavigate } from 'react-router-dom'
const Category = () => {
    const navigate=useNavigate();
    const navfruit=()=>{
        navigate('/Fruitsadder');
    }
    const navveg=()=>{
        navigate('/Addproduct');
    }
    const navfer=()=>{
        navigate('/Feradder');
    }
    const navviewveg=()=>{
      navigate('/Viewveg');
    }
  const navviewfru = () => {
    navigate('/Viewfruit');
  }
  const navviewfer = () => {
    navigate('/Viewfer');
  }
  return (
    <div className="bg-green-400 min-h-screen w-screen flex flex-col items-center justify-start py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <button
          className="bg-yellow-300 font-bold text-gray-800 py-4 px-8 rounded shadow hover:bg-yellow-400 transition"
          onClick={navviewfru}
        >
          View Fruits
        </button>
     
        <button
          className="bg-yellow-300 font-bold text-gray-800 py-4 px-8 rounded shadow hover:bg-yellow-400 transition"
          onClick={navviewveg}
        >
          View Vegetables
        </button>
        <button
          className="bg-yellow-300 font-bold text-gray-800 py-4 px-8 rounded shadow hover:bg-yellow-400 transition"
          onClick={navviewfer}
        >
          View Fertilizers
        </button>
        <button
          className="bg-yellow-300 font-bold text-gray-800 py-4 px-8 rounded shadow hover:bg-yellow-400 transition"
          onClick={navfruit}
        >
          Add Fruits
        </button>
        <button
          className="bg-yellow-300 font-bold text-gray-800 py-4 px-8 rounded shadow hover:bg-yellow-400 transition"
          onClick={navveg}
        >
          Add Vegetables
        </button>
      
        <button
          className="bg-yellow-300 font-bold text-gray-800 py-4 px-8 rounded shadow hover:bg-yellow-400 transition"
          onClick={navfer}
        >
          Add Fertilizers
        </button>
      </div>

      <div className="mt-10 w-full px-4">
        <ProductDetailsAgro />
      </div>
    </div>
  );

}

export default Category
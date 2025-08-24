import React from 'react';

const ProductDetailsAgro = () => {
  return (
    <div className="bg-green-100 py-10 px-4 md:px-20">
      <h2 className="text-3xl font-bold text-green-700 text-center mb-8">Why Buy Directly from Farmers?</h2>
      
      <div className="grid md:grid-cols-2 gap-10">
        {/* Vegetables & Fruits */}
        <div className="bg-green-400 rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300">
          <img
            src="https://cdn.pixabay.com/photo/2017/01/20/15/06/fruits-1995056_960_720.jpg"
            alt="Vegetables and Fruits"
            className="rounded-xl mb-4 w-full h-48 object-cover border-4 border-yellow-300"
          />
          <h3 className="text-2xl font-semibold text-green-800 mb-2">Fresh Vegetables & Fruits</h3>
          <p className="text-black">
            Get handpicked, seasonal produce directly from farms. No chemicals, no middlemen — just farm-fresh nutrition.
          </p>
        </div>

        {/* Fertilizers */}
        <div className="bg-green-400 rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300">
          <img
            src="https://images.meesho.com/images/products/413586481/fgmwu_512.webp"
            alt="Fertilizers"
            className="rounded-xl mb-4 w-full h-48 object-cover border-4 border-yellow-300"
          />
          <h3 className="text-2xl font-semibold text-green-800 mb-2">Organic Fertilizers</h3>
          <p className="text-black">
            Support sustainable farming with eco-friendly fertilizers sourced directly from trusted farmer cooperatives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsAgro;

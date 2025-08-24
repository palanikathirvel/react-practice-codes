import React, { useState } from 'react';
import Farmervegetable from './Farmervegetable.jsx';
import Farmerfertilizers from './Farmerfertilizers.jsx';
import Farmerfruit from './Farmerfruit.jsx';
import Farmersearch from './Farmersearch.jsx';
import vegimag from './vegetable.jpeg';
import fruitimag from './farmerfruit.jpeg';
import fertilizers from './farmerfertilizers.jpeg';
import ProductDetailsAgro from './ProductDetailsAgro.jsx';

function Farmerimage({ cartt, addcart }) {
    const [openveg, setopenveg] = useState(false);
    const [openfruit, setopenfruit] = useState(false);
    const [openfertilizers, setopenferti] = useState(false);

    const openvegetable = () => setopenveg(!openveg);
    const openfruitee = () => setopenfruit(!openfruit);
    const openferti = () => setopenferti(!openfertilizers);

    return (
        <>
            {/* Product modals or sections */}
            <Farmervegetable openveg={openveg} openvege={openvegetable} cartt={cartt} addcart={addcart} />
            <Farmerfruit openfruit={openfruit} openfruite={openfruitee} cartt={cartt} addcart={addcart} />
            <Farmerfertilizers openfertilizers={openfertilizers} openfertii={openferti} cartt={cartt} addcart={addcart} />

            {/* Main Section */}
            <div className="bg-green-300 pb-10 pt-5 z-49 w-full max-h-full">
                <Farmersearch />

                <div className="mt-10 flex flex-col space-y-10 items-center sm:flex-row sm:space-x-10 sm:space-y-0 sm:justify-center lg:space-x-30">
                    {/* Vegetables */}
                    <div className="flex flex-col items-center space-y-2">
                        <img src={vegimag} alt="vegetables" className="w-40 h-40 rounded transform hover:scale-110 transition duration-300" />
                        <button
                            onClick={openvegetable}
                            className="border border-black p-5 rounded-2xl text-2xl bg-yellow-300 text-black px-7 py-3 transition duration-500 ease-in-out hover:bg-green-500"
                        >
                            Vegetables
                        </button>
                    </div>

                    {/* Fruits */}
                    <div className="flex flex-col items-center space-y-2">
                        <img src={fruitimag} alt="fruit" className="w-40 h-40 rounded transform hover:scale-110 transition duration-300" />
                        <button
                            onClick={openfruitee}
                            className="border border-black p-5 rounded-2xl text-2xl bg-yellow-300 text-black px-12 py-3 transition duration-500 ease-in-out hover:bg-green-500"
                        >
                            Fruit
                        </button>
                    </div>

                    {/* Fertilizers */}
                    <div className="flex flex-col items-center space-y-2">
                        <img src={fertilizers} alt="fertilizers" className="w-40 h-40 rounded transform hover:scale-110 transition duration-300" />
                        <button
                            onClick={openferti}
                            className="border border-black p-5 rounded-2xl text-2xl bg-yellow-300 text-black px-7 py-3 transition duration-500 ease-in-out hover:bg-green-500"
                        >
                            Fertilizers
                        </button>
                    </div>
                </div>
            </div>
            <ProductDetailsAgro />
        </>
    );
}

export default Farmerimage;

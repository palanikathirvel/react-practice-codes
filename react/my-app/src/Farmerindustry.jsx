import industry from './industry.json';
import React, { useState } from 'react';
import Farmercustomerdetails from './Farmercustomerdetails.jsx';
import Productfullview from './Productfullview.jsx';

function Farmerindustry({ rend, setrender }) {
    const [indus, setIndus] = useState(industry);
    const [custom, setcustom] = useState(false);

    function setcustomer() {
        setcustom(!custom);
    }
    

    return (
        <div className="bg-green-700 p-3 absolute top-0 left-0 w-full z-48">
            <h3 className="flex justify-center bg-yellow-300 p-4 rounded-xl text-4xl">
                Industry needs
            </h3>
            <div className="absolute top-4 right-4">
                <svg onClick={setrender} className="fill-black size-9" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
            </div>
            <div className="bg-yellow-300 mt-2 p-3 rounded-xl">
                <div className="w-full">
                    {indus.map((ind, index) => (
                        <div key={ind.id} className="border-b border-gray-300 mb-4 p-4">
                            <h1 className="font-bold text-lg">Name of the company: {ind.cname}</h1>
                            <p>Description: {ind.cdes}</p>
                            <p>Wanted: {ind.want}</p>
                            <div className="flex justify-between mt-2">
                                <div>
                                    <p>City: {ind.city}</p>
                                    <p>Other city: {ind.ocity}</p>
                                </div>
                                <div>
                                    <p>Cost: {ind.cost}</p>
                                </div>
                            </div>
                            <button onClick={setcustomer} className="text-center bg-yellow-400 p-2 rounded-xl mt-4 hover:bg-green-400 font-bold text-red-600">
                                Selling
                            </button>
                            {custom && <Productfullview pid={ind.id} pimg={ind.img} pname={ind.cname} pitemwant={ind.iw} pquantity={ind.q} pestamt={ind.ea} ptrans={ind.tm} pcn={ind.cn} custom={custom} setcustomer={setcustomer}/>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Farmerindustry;

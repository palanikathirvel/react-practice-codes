import './index.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Farmerhome from './Farmerhome.jsx';
import Farmercart from './Farmercart.jsx';
import Farmerlogin from './Farmerlogin.jsx';
import Farmercontact from './Farmercontact.jsx';
import Farmerpartner from './Farmerpartner.jsx';
import Farmerhomeabout from './Farmerhomeabout.jsx';
import Farmerabout from './Farmerabout.jsx';
import Farmerproduct from './Farmerproduct.jsx';
import Farmerservice from './Farmerservice.jsx';
import Yourdetails from './Yourdetails.jsx';
import Farmercustomerdetails from './Farmercustomerdetails.jsx';
import Farmersignin from './Farmersignin.jsx';
import Cartdetails from './Cartdetails.jsx';
import Addproduct from './Addproduct.jsx';
import Farmerimage from './Farmerimage.jsx';
import ProductDetailsAgro from './ProductDetailsAgro.jsx';
import Category from './Category.jsx';
import Fruitsadder from './Fruitsadder.jsx';
import Feradder from './Feradder.jsx'
import Viewveg from './Viewveg.jsx'
import Viewfruit from './Viewfruit.jsx'
import Viewfer from './Viewfer.jsx'

function App() {
  const [cartt, addcart] = useState([]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              
              <Farmerhome cartt={cartt} addcart={addcart} />
              <ProductDetailsAgro />
              <Farmercontact />
            </>
          }
        />
        <Route path="/Farmerhomeabout" element={<Farmerhomeabout />} />
        <Route path="/Farmerpartner" element={<Farmerpartner />} />
        <Route path="/Farmerabout" element={<Farmerabout />} />
        <Route path="/Farmerservice" element={<Farmerservice />} />
        <Route path="/Farmerproduct" element={<Farmerproduct />} />
        <Route path="/Yourdetails" element={<Yourdetails />} />
        <Route path="/Farmercustomerdetails" element={<Farmercustomerdetails />} />
        <Route path="/Farmersignin" element={<Farmersignin />} />
        <Route path="/Farmerlogin" element={<Farmerlogin />} />
        <Route path="/Cartdetails" element={<Cartdetails />} />
        <Route path="/Addproduct" element={<Addproduct />} />
        <Route path="/Farmerimage" element={<Farmerimage />} />
        <Route path="/Category" element={<Category/>}/>
        <Route path="/Fruitsadder" element={<Fruitsadder/>}/>
        <Route path="/Feradder" element={<Feradder/>}/>
        <Route path="/Viewveg" element={<Viewveg/>}/>
        <Route path="/Viewfruit" element={<Viewfruit />} />
        <Route path="/Viewfer" element={<Viewfer />} />
      </Routes>
    </>
  );
}

export default App;

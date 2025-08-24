import { Link } from 'react-router-dom';
import Yourdetails from './Yourdetails.jsx'
import { useEffect } from 'react';

function productfullview({custom,setcustomer,pid,pimg,pname,pitemwant,pquantity,pestamt,ptrans,pcn,}){
    useEffect(() => {
        if (setcustomer) {
            window.scrollTo({
                top: 0,
                behaviour: 'smooth',
            });
        }
    }, [setcustomer]);
    return(
        <>
        
<div class="absolute left-0 h-full w-full z-49 top-0 bg-yellow-200 text-black ">
                <div class="bg-green-400 w-full py-5 text-center text-black text-3xl">Industry details</div>
                <div class="pl-10">
    <h3 className="font-bold text-3xl text-left p-5 mt-10">Industry name:{pname}</h3>
                <div class="absolute top-4 right-4">
                    <svg onClick={setcustomer} class="fill-black size-8 cursor-pointer" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                </div>
    <img key={pid} src={pimg} alt="industry image" class="h-30 w-30 transition translate-x-4 ease-in-out lg:w-1/2">
    </img>
                    <h2 key={pid} class="font-bold text-xl text-left p-5 mt-10">about industry: </h2>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam fuga laborum neque cum beatae nihil, exercitationem magni perferendis laudantium aspernatur nisi ut earum, at asperiores repudiandae blanditiis non! Minus, et.
    </p>
                    <h4 key={pid} class="font-bold text-xl text-left p-5 mt-10">Items wanted:{pitemwant}</h4>
                    <h5 key={pid} class="font-bold text-xl text-left p-5 mt-10">quantity:{pquantity}</h5>
                    <h5 key={pid} class="font-bold text-xl text-left p-5 mt-10">Estimated amount per kg:{pestamt}</h5>
                    <h6 key={pid} class="font-bold text-xl text-left p-5 mt-10">Transport method:{ptrans}</h6>
                    <h6 key={pid} class="font-bold text-xl text-left p-5 mt-10">contact no:{pcn}</h6>
    <Link to='/Yourdetails'>
    <button class="bg-black p-4 ml-10 text-white mt-5 text-xl text-center rounded-xl hover:bg-white hover:text-black lg:w-80">Proceed to give</button>
    </Link>
    </div>
</div>
        </>
    )
}
export default productfullview
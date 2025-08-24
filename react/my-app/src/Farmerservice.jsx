import {useEffect} from 'react';
function Farmerservice(){
     useEffect(() => {

        window.scrollTo({
            top: 0,
            behaviour: 'smooth',
        });

    }, []);
    return(
        <>
        <div class="absolute top-0 bg-yellow-300 z-50 w-full h-full">
                
                    <div class="bg-green-400 py-5 font-bold text-center text-5xl mt-10">Our Services</div>
                    <p class="text-center text-3xl my-20">
                        <ul class="p-5">
                        <li class="p-3">selling products to customers</li>
                        <li class="p-3">Buy product from Farmers</li>
                        <li class="p-3">Connecting customers with Farmers directly</li>
                        </ul>
                    </p>
                </div>
        
        </>
    )
}
export default Farmerservice
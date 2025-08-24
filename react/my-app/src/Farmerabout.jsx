import {useEffect} from 'react'
function Farmerabout() {
    useEffect(() => {
    
            window.scrollTo({
                top: 0,
                behaviour: 'smooth',
            });
        
    }, []);
    return (
        <>
            <div class=" absolute top-0 z-50 bg-green-700 w-full h-full">
                <div class="bg-yellow-400 py-5 font-bold text-center text-5xl mt-10">🌴Agrobridge</div>
                <p class="text-center text-3xl my-20">
                    We bridge the gap between the farmers and customers.
                    that the customers can buy directly the products from the farmers and farmers sell thier prodcuts directly to customers.
                </p>
            </div>
        </>
    )
    
    
}
export default Farmerabout
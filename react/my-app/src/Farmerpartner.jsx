import { useEffect } from "react";
function Farmerpartner(){
    useEffect(() => {

        window.scrollTo({
            top: 0,
            behaviour: 'smooth',
        });

    }, []);
    return(
        <>
        <div className={`text-center bg-yellow-200 p-5  top-0 absolute h-full w-full z-50 text-2xl  pt-5`}>
                
            <h1 class="text-3xl font-bold pb-6 pt-6">Our Partners:</h1>  
            <ul>
                    <li class="text-3xl pb-6 pt-6">
                  Grow max vegetables
                </li>
                    <li class="text-3xl pb-6 pt-6">
                Agro vegetables
                </li>
                    <li class="text-3xl pb-6 pt-6">
                K7 Vegetables
                </li>
                    <li class="text-3xl pb-6 pt-6">
        PK vegetables
                </li>
                    <li class="text-3xl pb-6 pt-6">
        Ganesh vegetables&fruits
</li>
                
            </ul>
        </div>
        </>
    )
}
export default Farmerpartner
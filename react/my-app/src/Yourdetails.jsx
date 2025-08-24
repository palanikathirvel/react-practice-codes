import { useEffect } from "react";
function Yourdetails(){
    useEffect(() => {
        
            window.scrollTo({
                top: 0,
                behaviour: 'smooth',
            });
        
    }, []);
    return(
        <>
                <div class="absolute w-full h-full z-[999999] bg-yellow-400 text-center p-5 mt-2 rounded-xl top-0 left-0 pt-20">
                    <form>
                        
                        <h1 class="font-bold text-3xl mb-5 text-center">customer Details</h1>

                        <br></br>
                        <input type="text" placeholder="Enter your name" class="placeholder-black p-3 rounded-xl text-center sm:w-3/4 lg:1/2"></input>
                        <br>
                        </br>
                        <br>
                        </br>
                        <input type="text" placeholder="Enter your place" class="placeholder-black p-3 rounded-xl text-center mb-5 sm:w-3/4 lg:1/2"></input>
                        <br>
                        </br>

                        <input type="number" placeholder="Enter phone no" class="placeholder-black p-3 rounded-xl text-center mb-5 sm:w-3/4 lg:1/2"></input>
                        <br></br>
                        <label class="font-bold mb-2">
                            Payment method:
                        </label>
                        <br>
                        </br>
                        <select class="p-2 rounded-xl mb-5">
                            <option>Cash on delivary</option>
                            <option>Card</option>
                            <option>visa</option>
                        </select>
                        <br>
                        </br>

                        <input type="text" placeholder="delivery location" class="placeholder-black p-3 rounded-xl text-center h-32 sm:w-3/4 lg:1/2"></input>
                        <br>
                        </br>
                        <button class="p-5 rounded-2xl bg-black text-white font-xl">proceed to pay</button>
                    </form>
                </div>
            </>
            )
        }
export default Yourdetails
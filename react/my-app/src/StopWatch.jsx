import react, {useState,useEffect,useRef,createContext} from 'react';
const [time,settime]=useState(new Date());

function StopWatch(){
return(
    <>
    <div class="bg-black border-4 border-black p-4 mt-10"> 
            <h1 class="text-5xl text-white flex justify-center mt-10">stopwatch</h1>
            <h1 class="text-5xl text-white tracking-widest flex justify-center mt-10">00:00:00</h1>
            <div class="flex justify-center mt-10 mb-10">
            <button class="p-5 text-2xl ml-5  border-black bg-green-500  border rounded-2xl ">Start</button>
            <button class="p-5 text-2xl ml-5  border-black bg-red-500  border rounded-2xl ">Pause</button>
            <button class="p-5 text-2xl ml-5  border-black bg-blue-500 border rounded-2xl ">Reset</button>
            </div>
    </div>
    </>
)
}
export default StopWatch
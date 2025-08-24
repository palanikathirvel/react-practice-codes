import react, {useState} from 'react';
import Farmerhome from './Farmerhome.jsx';
function Farmerhead(){
    const [isclose,setclose]=useState(true);
const  closethehome = () => {
    setclose(!dispp);
}
return(

    <div class="flex  bg-green-500 p-3 pt-3">
        <div class="fill-yellow-400 cursor-pointer m-3" ><svg id="dot" onClick={closethehome}  class="fill-yellow-300" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg></div>
            <h1 class="text-yellow-400  text-4xl absolute right-1/3">NAACHI🌴</h1>
    <br></br>

    <br>
    </br>
            
    <div class="absolute right-0 top-0 mr-3 mt-2">photo</div>
    <Farmerhome dispp={dispp} />
    </div>
        

)
}
export default Farmerhead
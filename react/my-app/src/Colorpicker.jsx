import react, {useState} from 'react';
function Colorpicker(){
    const [food,setfood]=useState(["apple","orange","mango","banana"]);
    function addfood(){
const newfood=document.getElementById("foodname").value;
        document.getElementById("foodname").value="";

setfood(food=>[...food,newfood]);
    }
    function removefood(index){
        setfood(food.filter((_,i)=> i!=index));
    }
    return(
        <>
        <div>
            <h1>foods</h1>
            <ul>
                {food.map((f,index) => <li key={index}
                onClick={()=> (removefood(index))}>{f}</li>)}
            </ul>
            <input type="text" id="foodname" placeholder="enter the food name" />
            <br></br>
            <br></br>
            <button onClick={addfood}>add food</button>
            
        </div>
        </>
    )
}
export default Colorpicker
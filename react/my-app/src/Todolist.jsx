import react, {useState} from 'react';

function Todolist(){
    const [task, settask] = useState(["go to gym","pray to god","walking","eat breakfast"]);
    const [newtask,setnew]=useState();
    function inputchange(event){
setnew(event.target.value);
    }
    function addtask() {
if(newtask.trim()!=""){
    settask(t=>[...t,newtask]);
    setnew("");
}
    }
    function removetask(index) {
const updatetasks=task.filter((_,i)=> i!==index);
settask(updatetasks);
    }
    function taskup(i) {
const updated=[...task];
[updated[i],updated[i-1]]=[updated[i-1],updated[i]];
settask(updated);
    }
    function taskdown(i) {
        const updated=[...task];
        [updated[i], updated[i + 1]] = [updated[i + 1], updated[i]];
        settask(updated);
    }
return(
    <body class="bg-black p-10 font-serif h-full text-white">
    <div>
<h1 class="flex justify-center mt-10 font-bold  text-4xl mb-8 text-white">To-Do-List</h1>
<div class="font-sans flex justify-center">
<input class="border border-black-900 rounded p-3 w-150 pl-5 text-black lg:px-20" type="text" placeholder="Enter your task..." value={newtask} onChange={inputchange}></input>
<button onClick={addtask} class="border border-white bg-green-600 p-3 rounded-2xl ml-4 text-xl">ADD</button>
</div>
    <ol>
        {task.map((elem,index)=> <li class="border bg-white text-black border-white rounded flex justify-evenly mt-5 mb-5 p-3" key={index}>
            <span class="flex justify-center text-xl">{elem}</span>
            <button class="bg-red-500 ml-5 p-2 flex justify-items-end rounded-xl px-5 lg:px-10" onClick={()=>removetask(index)}>delete</button>
            <button class="bg-green-700 ml-5 p-2 flex justify-center rounded-xl px-5 lg:px-10"onClick={()=>taskup(index)}>up 👍</button>
            <button class="bg-green-700 ml-5 p-2 flex justify-center rounded-xl px-5 lg:px-10" onClick={()=>taskdown(index)}>down 👎</button>
            </li>)}
    

    </ol>         
</div>
</body>
)
}
export default Todolist
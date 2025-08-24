import react, { useState,createContext } from 'react';
import ComponentB from './ComponentB.jsx'
export const userContext =createContext();
function ComponentA(){
    const [user, setuser] = useState("palani");
return(
    <div>
    <h1 class="border border-black rounded p-5 ">component A
            <p>{user}</p>
            <userContext.Provider value={user}>
<ComponentB user={user} />
            </userContext.Provider>
            
    </h1>
    </div>
)
}
export default ComponentA
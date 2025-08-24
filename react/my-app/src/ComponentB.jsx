import react, {useContext} from 'react';
import {userContext} from './ComponentA.jsx';

function ComponentB() {
    let user = useContext(userContext);
    return (
        
        <>
           
            <h1 class="border border-black rounded p-3 ">component B
                <h1>{user}</h1>
                </h1>
            
        </>
    )
}
export default ComponentB
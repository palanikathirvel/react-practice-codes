import React, {useContext} from 'react';
import {userContext} from './ComponentA.jsx';

function ComponentC(){
    let user=useContext(userContext);
return(
    <>
    <h1 class="border border-black rounded p-3">Component C</h1>
    <P>{user}</P>
    </>
)
}
export default ComponentC
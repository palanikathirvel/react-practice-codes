import {createContext} from 'react';
import fruitdata from './itemfruit.json';
import itemveg from './items.json';
import itemferti from './itemfertilizers.json';
export const ShopContext = createContext();
const ShopContextProvider = (props) => {
    const fvalue = {
        fruitdata
    }
    const vvalue={
        itemveg
    }
    const fevalue={
        itemferti
    }
    return (
        <ShopContext.Provider value={fvalue} vvalue={fevalue} fevalue={itemferti}>
            {props.children}
        </ShopContext.Provider>
        
    
    
        
    )
}
export default ShopContextProvider
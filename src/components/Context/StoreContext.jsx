import { createContext, useEffect, useState } from "react";
import { FoodData } from "../../MenuData";

export const StoreContext = createContext(null);

function Ucontext(props){

    const[cartItem,setCartItem] = useState({});

    const addtoCart = (itemId) => {
        if(!cartItem[itemId]){
            setCartItem((prev) => ({...prev,[itemId]:1}))
        }
        else{
            setCartItem((prev) => ({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removefromCart = (itemId) => {
        setCartItem((prev) => ({...prev,[itemId]:prev[itemId]-1}))
    }

    const removeItem = (itemId) => {
        setCartItem((prev) => ({...prev,[itemId]:0}))
    }

    const getTotalAmount = () => {
        let totalAmount = 0;
        for(const item in cartItem){
            if(cartItem[item] > 0){
                let itemInfo = FoodData.find((product) => {
                    return product.id==item
                });

                totalAmount += itemInfo.prize* cartItem[item];
            }
        }
        
        return totalAmount;
    }

    const contxtValue = {
        FoodData,
        cartItem,
        setCartItem,
        addtoCart,
        removefromCart,
        removeItem,
        getTotalAmount
    }

    return(
        <div>
            <StoreContext.Provider value={contxtValue}>
                {props.children}
            </StoreContext.Provider>
        </div>
    )
}

export default Ucontext;
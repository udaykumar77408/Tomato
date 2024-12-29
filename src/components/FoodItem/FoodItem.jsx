import React, { useContext } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "./FoodItem.css";
import { StoreContext } from '../Context/StoreContext';

const FoodItem = ({image,id,prize,cateogery,data,name}) => {

  const {cartItem,setCartItem,addtoCart,removefromCart} = useContext(StoreContext);

  return (
    <div className='item-card'>
      <img src={image} className='img-fluid w-100 position-relative' alt="not found"/>
      <div className="add-item d-flex">
        {!cartItem[id]?
          <>
          <div className="add-item-plus" onClick={() => addtoCart(id)}>+</div>
          </>:
          <>
            <div className="add-item-minus" onClick={() => removefromCart(id)}>-</div>
            <p>{cartItem[id]}</p>
            <div className="add-item-plus" onClick={() => addtoCart(id)}>+</div>
          </>
          
        }
      </div>
      <div className='p-3'>
        <div className='mt-3'>
          <h4>{name}</h4>
          <p>{data}</p>
        </div>
        <h4>${prize}</h4>
      </div>
    </div>
  )
}

export default FoodItem

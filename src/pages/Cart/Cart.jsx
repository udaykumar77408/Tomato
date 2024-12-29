import React, { useContext } from 'react';
import "./Cart.css";
import { StoreContext } from '../../components/Context/StoreContext';

const Cart = () => {

  const{FoodData,cartItem,removeItem,getTotalAmount} = useContext(StoreContext);

  return (
    <div className='cart mt-5'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        <div>
          {
            FoodData.map(({image,name,id,prize}) => {
              if(cartItem[id]>0){
                return(
                  <div key={id} className="cart-items-title cart-list-item">
                    <img src={image} className='img-fluid' alt="not found..." />
                    <p>{name}</p>
                    <p>{prize}</p>
                    <p>{cartItem[id]}</p>
                    <p>$ {cartItem[id] * prize}</p>
                    <p onClick={()=>removeItem(id)}>X</p>
                  </div>
                )
              }
            })
          }
        </div>
      </div>
      <div className='order-items'>
        <div className="order-list">
          <div className='order-list-child'>
            <div className="d-flex justify-content-between">
              <p>Order Amount</p>
              <p>${getTotalAmount()}</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Delievery Charges</p>
              {
                getTotalAmount()==0?<p>$0</p>:<p>$2</p>
              }
            </div><hr />
            <div className="d-flex justify-content-between">
              <p><b>Total Amount</b></p>
              {
                getTotalAmount()==0?<p>$0</p>:<p>${getTotalAmount()+2}</p>
              }
            </div>
          </div>
          <div className='order-list-child'>
            <p className='mb-4'>Enter your coupon code here.</p>
            <form>
              <input type="text" placeholder='Enter Coupon Id...'/>
              <button>Apply Coupon</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart;

import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
const CartItems = () => {
    const {totalAmount,all_product,cartItem,removeFromCart}=useContext(ShopContext);
  return (
    <div className='cartItems'>
        <div className='main-items'>
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e)=>{
            if(cartItem[e.id]>0){
                return <div>
                <div className='cartitems-format main-items'>
                    <img src={e.image} alt="" className='carticon-product-icon'></img>
                    <p>{e.name}</p>
                    <p>${e.new_price}</p> 
                    <button className='quantity'>{cartItem[e.id]}</button>
                    <p>${e.new_price*cartItem[e.id]}</p>
                    <img  className="carticon-remove-icon"src={remove_icon} onClick={()=>{removeFromCart(e.id)}}alt=""></img>        
                     </div>
                     <hr />
            </div>
            }
            return null;
        })}
        <div className="cart-items-down">
            <div className="cart-items-total">
                <h1>Cart Totals</h1>
                <div className="cart-total-items">
                    <p>Subtotal</p>
                    <p>${totalAmount()}</p>
                </div>
                <hr />
                <div className="cart-total-items">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cart-total-items-1">
                    <h3>Total</h3>
                    <h3>${totalAmount()}</h3>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
        </div>
        <div className="promocode">
            <p>If you have a Promocode,Enter it here</p>
            <div className="promobox">
                <input type="text" placeholder='promo code'></input>
                <button>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default CartItems

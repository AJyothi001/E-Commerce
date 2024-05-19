import React, { useContext } from 'react'
import './ProductDisplay.css';
import star_icon from '../Components/Assets/star_icon.png';
import star_dull_icon from '../Components/Assets/star_dull_icon.png';
import { ShopContext } from '../Context/ShopContext';
const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart}=useContext(ShopContext);
  return (
    <div className='productDisplay'>
      <div className='pd-left'>
        <div className='list'>
            <img src={product.image} alt=""></img>
            <img src={product.image} alt=""></img>
            <img src={product.image} alt=""></img>
            <img src={product.image} alt=""></img>
        </div>
        <div className='productDisplay-img'>
            <img className='productDisplay-main-img' src={product.image} alt=""></img>
        </div>
      </div>
      <div className='pd-right'>
        <h1>{product.name}</h1>
        <div className='right-star'>
        <img src={star_icon} alt=""></img>
        <img src={star_icon} alt=""></img>
        <img src={star_icon} alt=""></img>
        <img src={star_icon} alt=""></img>
        <img src={star_dull_icon} alt=""></img>
        <p>(122)</p>
      </div>
      <div className='right-prices'>
            <div className='right-prices-old'>${product.old_price}</div>
            <div className='right-prices-new'>${product.new_price}</div>
      </div>
      <div className='right-description'>
        A lightweight,usually knitted,pullover shirt,close-fitting with a round neckline and short sleeves,worn as an undershirt outer garment.
      </div>
      <div className='right-size'>
        <h1>Select Size</h1>
        <div className='sizes'>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
        </div>
      </div>
      <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
      <p className='category'><span>Category : </span>Women , T-Shirt , Crop Top</p>
      <p className='category'><span>Tags : </span>Modern , Latest</p>

      </div>
      </div>
  )
}

export default ProductDisplay

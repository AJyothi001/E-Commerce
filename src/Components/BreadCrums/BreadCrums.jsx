import React from 'react'
import './BreadCrums.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'
const BreadCrums = (props) => {
    const {product}=props;
  return (
    <div className='breadCrum'>
        HOME <img src={arrow_icon} alt=""></img>SHOP<img src={arrow_icon} alt=""></img>{product.category}<img src={arrow_icon} alt=""></img>{product.name}
    </div>
  )
}
export default BreadCrums

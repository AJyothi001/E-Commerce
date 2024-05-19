import React,{useContext} from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import drop_down from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Items/Item'
const ShopCategory = (props) => {
  const {all_product}=useContext(ShopContext);
  return (
    <div className='shopCategory'>
      <img className="banner"src={props.banner} alt=""></img>
      <div className="inner">
        <p>
          <span>Showing 1-12</span> out of 36 Products
        </p>
        <div className='sort'>
          Sort by <img src={drop_down} alt=""></img>
        </div>
      </div>
      <div className='products'>
      {all_product.map((item,i)=>{
              if(props.category===item.category)
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
              else
                return null;
            })}
      </div>
      <div className='load'>Explore More</div>
    </div>
  )
}

export default ShopCategory

import './HomeCartItem.scss';
import CartContext from '../../../context/Cart/CartContext';
import { useContext } from 'react';
const HomeCartItem = ({item}) => {
  const {removeItem} = useContext(CartContext);
    return (
        <li className="CartItem__item">
        <img src={item.img} alt="" />
        <div className='Cart__item-name'>
          {item.name} 
        </div>
       
        <div className="Cart__item-qty">
          <span>{item.qty}x</span>
        </div>
        <div className="Cart__item-price">
        {(item.price).toLocaleString('vi-VN')}<sup>đ</sup>
        </div>
        <button className="CartItem__button"  onClick={() => removeItem(item.id)}>
          Remove
        </button>
       
      </li>
    )
}

export default HomeCartItem

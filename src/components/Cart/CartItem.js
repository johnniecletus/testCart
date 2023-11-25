import classes from './CartItem.module.css';
import { useDispatch} from 'react-redux';
import { CartAction } from '../../store/cart';
const CartItem = (props) => {
  const dispatch = useDispatch();

  const { title, quantity, total, price, id } = props.item;
  
  const removeFromCart = () => {
    dispatch(CartAction.removeNewCartItem({
      id,
      price,
    }));
  };
  const addToCart = () => {
    dispatch(CartAction.addNewCartItem({
      id,
      price,
      title
    }));
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeFromCart}>-</button>
          <button onClick={addToCart}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

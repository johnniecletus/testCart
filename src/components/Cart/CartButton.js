import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { uiAction } from '../../store/ui-slice';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartNumber = useSelector(state => state.cart.totalQuantity)

  const togglebutton = () => {
    dispatch(uiAction.toggle());
  }


  return (
    <button className={classes.button} onClick={togglebutton}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartNumber}</span>
    </button>
  );
};

export default CartButton;

import Cart from './components/Cart/Cart';
import {Fragment, useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { uiAction } from './store/ui-slice';
import Notification from "./components/UI/notification";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showcart = useSelector(state => state.Ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(uiAction.showNotification({
        status: "pending",
        title: "sending",
        message: "sending cart data"
      }))
      const  response = await fetch('https://testcart-b12f8-default-rtdb.firebaseio.com/cart.json',{
        method: 'PUT',
        body: JSON.stringify(cart),
      }) ;

      if(!response.ok){
        throw new Error('sending cart data failed.');
      }

      dispatch(uiAction.showNotification({
        status: "success",
        title: "success",
        message: "cart data sent successfully"
      }))

      const responseData = await response.json();
      if (isInitial) {
      isInitial = false;
      return;
    }
    }  ;
    
    sendCartData().catch(error =>{
      dispatch(uiAction.showNotification({
        status: "error",
        title: "Error",
        message: "Sending cart data failed"
      }))
    })
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (<Notification status={notification.status} title={notification.title} message={notification.message}/>)}
    <Layout>
      {showcart && <Cart />}
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;

import Cart from './components/Cart/Cart';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const showcart = useSelector(state => state.Ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    fetch('https://testcart-b12f8-default-rtdb.firebaseio.com/cart.json',{
      method: 'PUT',
      body: JSON.stringify(cart),
    } ) 
  }, [cart])

  return (
    <Layout>
      {showcart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;

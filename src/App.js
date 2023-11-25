import Cart from './components/Cart/Cart';
import { useSelector } from 'react-redux';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const showcart = useSelector(state => state.Ui.cartIsVisible)
  return (
    <Layout>
      {showcart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;

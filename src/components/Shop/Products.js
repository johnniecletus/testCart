import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_DATA = [
  {
    id: "b1",
    price: 6,
    title: "THE TRIAL OF BROTHER JERO",
    description: "My frist book"
  },
  {
    id: "b2",
    price: 15,
    title: "THE JOURNEY OF BROTHER JERO",
    description: "My second book"
  },
  {
    id: "b3",
    price: 10,
    title: "THY KINGDOM COME: BOOK 1",
    description: "My third book"
  },
  {
    id: "b4",
    price: 14,
    title: "THY KINGDOM COME: BOOK 2",
    description: "My fourth book"
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map((product) => (
          <ProductItem
          key={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          id={product.id}
        />
        ))}
        
      </ul>
    </section>
  );
};

export default Products;

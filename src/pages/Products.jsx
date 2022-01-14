import { Link } from "react-router-dom";

function Products(props) {
  return (
    <main>
      <section className="products-container main-wrapper">
        <ul className="products-container__list">
          {props.products.map((product) => (
            <Link to={`/products/${product.id}`}>
              <li>
                <article className="product-item">
                  <img src={product.image} alt={product.title} />
                  <h3>{product.title}</h3>
                </article>
              </li>
            </Link>
          ))}
        </ul>
      </section>
    </main>
  );
}
export default Products;

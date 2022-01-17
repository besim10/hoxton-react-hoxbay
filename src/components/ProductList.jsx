import Product from "./Product";

function ProductList({ products }) {
  return (
    <ul className="products-container__list">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ul>
  );
}
export default ProductList;

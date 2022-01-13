function Products(props) {
  return (
    <main>
      <section className="products-container main-wrapper">
        <ul className="products-container__list">
          {props.products.map((product) => {
            return (
              <li>
                {console.log(props.products)}
                <a href="/products/1">
                  <article className="product-item">
                    <img src={product.image} alt={product.title} />
                    <h3>{product.title}</h3>
                  </article>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
export default Products;

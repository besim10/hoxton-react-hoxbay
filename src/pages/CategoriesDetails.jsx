import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function CategoriesDetails(props) {
  const param = useParams();

  function filterByCategory() {
    let copyProducts = JSON.parse(JSON.stringify(props.products));
    copyProducts = copyProducts.filter(
      (product) => product.categoryId === Number(param.id)
    );
    return copyProducts;
  }
  return (
    <main>
      <section className="products-container main-wrapper">
        <ul className="products-container__list">
          {filterByCategory().map((product) => (
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
export default CategoriesDetails;

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ProductDetail(props) {
  const params = useParams();
  const [product, setProduct] = useState(null);

  const productsFromServer = () =>
    fetch(`http://localhost:3001/products/${params.id}`).then((resp) =>
      resp.json()
    );
  useEffect(() => {
    productsFromServer().then((productFromServer) =>
      setProduct(productFromServer)
    );
  }, []);

  const addProductToState = (product) => {
    let copySelectedProducts = JSON.parse(
      JSON.stringify(props.selectedProducts)
    );

    const checkIfItsTheSameProduct = copySelectedProducts.find(
      (targetProduct) => targetProduct.id === product.id
    );
    if (!checkIfItsTheSameProduct) {
      copySelectedProducts.push(product);
      props.setSelectedProducts(copySelectedProducts);
    }
  };
  if (product === null) return <h1>Loading..</h1>;
  return (
    <main>
      <section className="product-detail main-wrapper">
        <img src={product.image} alt={product.title} />
        <div className="product-detail__side">
          <h3></h3>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>£{product.price} </p>
          <Link to="/basket">
            <button
              onClick={() => {
                addProductToState(product);
              }}
            >
              Add to basket
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
export default ProductDetail;

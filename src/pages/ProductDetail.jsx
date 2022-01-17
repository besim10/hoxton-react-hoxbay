import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function ProductDetail() {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const productsFromServer = () =>
    fetch(`http://localhost:3000/products/${params.id}`).then((resp) =>
      resp.json()
    );
  useEffect(() => {
    productsFromServer().then((productFromServer) =>
      setProduct(productFromServer)
    );
  }, []);

  const addProductToServer = () => {
    fetch("http://localhost:3000/basket", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...product, quantity: 1 }),
    }).then((resp) => {
      if (resp.ok) {
        // managed to create the item
        navigate("/basket");
      } else {
        // failed to create the item
        // probably because the item is already there
        // increase quantity on server
        // then navigate to basket
        navigate("/basket");
      }
    });
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
          <button
            onClick={() => {
              addProductToServer();
            }}
          >
            Add to basket
          </button>
        </div>
      </section>
    </main>
  );
}
export default ProductDetail;

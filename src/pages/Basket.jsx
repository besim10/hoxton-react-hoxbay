import { useEffect, useState } from "react";

function Basket() {
  const [basket, setBasket] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/basket")
      .then((resp) => resp.json())
      .then((basketFromServer) => setBasket(basketFromServer));
  }, []);
  function getTotal(basket) {
    let total = 0;

    for (const item of basket) {
      total += item.quantity * item.price;
    }

    return total.toFixed(2);
  }
  function updateQuantity(item, newQuantity) {
    // make a copy of the data
    let basketCopy = JSON.parse(JSON.stringify(basket));

    if (newQuantity > 0) {
      // update the data
      const match = basketCopy.find((target) => target.id === item.id);
      match.quantity = newQuantity;
    } else {
      // remove it from basket
      basketCopy = basketCopy.filter((target) => target.id !== item.id);
    }

    // update state
    setBasket(basketCopy);
  }
  return (
    <section className="basket-container">
      <h2>Your Basket</h2>
      <ul>
        {basket.map((product) => (
          <li key={product.id}>
            <article className="basket-container__item">
              <img src={product.image} alt={product.title} width="90" />
              <p>{product.title}</p>
              <p>
                Qty:
                <select
                  defaultValue={product.quantity}
                  onChange={(e) => {
                    updateQuantity(product, Number(e.target.value));
                  }}
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </p>
              {/* <!-- The item total is calculated using the Qty selected value --> */}
              <p>
                Item total: £{(product.price * product.quantity).toFixed(2)}
              </p>
            </article>
          </li>
        ))}

        {/* <!--  --> */}
      </ul>
      {/* <!-- Basket total is calculated using each item's total from above --> */}
      <h3>Your total: £{getTotal(basket)}</h3>
    </section>
  );
}
export default Basket;

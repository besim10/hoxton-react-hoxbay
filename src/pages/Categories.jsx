const randColour = () =>
  ["green", "red", "blue", "yellow"][Math.floor(Math.random() * 4)];
function Categories() {
  return (
    <main>
      <section className="categories-container main-wrapper">
        <ul className="categories-container__list">
          {/* <!-- Single category --> */}
          <li style={{ backgroundColor: `var(--${randColour()})` }}>
            {/* <!-- Use the Link component from React Router to create  the anchor tags -->*/}
            <a href="/categories/1">electronics</a>
          </li>
          {/* <!--  --> */}
          <li style={{ backgroundColor: `var(--${randColour()})` }}>
            <a href="/categories/2">jewelery</a>
          </li>
          {/* <!--  --> */}
          <li style={{ backgroundColor: `var(--${randColour()})` }}>
            <a href="/categories/3">men's clothing</a>
          </li>
          {/* <!--  --> */}
          <li style={{ backgroundColor: `var(--${randColour()})` }}>
            <a href="/categories/4">women's clothing</a>
          </li>
          {/* <!--  --> */}
        </ul>
      </section>
    </main>
  );
}
export default Categories;

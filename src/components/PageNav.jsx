import { Link } from "react-router-dom";
function PageNav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
        <li>
          <Link to="/">Homepage</Link>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;

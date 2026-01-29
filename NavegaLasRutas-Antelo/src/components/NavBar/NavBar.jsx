import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";
import Logo from "../../Fotos/Logo.png";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={Logo} height="100" alt="Logo" />
        </Link>

        <div className="collapse navbar-collapse show">
          <ul className="navbar-nav mx-auto justify-content-center mb-2 mb-lg-0">
            <li className="nav-item mx-4">
              <Link className="nav-link" to="/category/smartphones">
                Celulares
              </Link>
            </li>

            <li className="nav-item mx-4">
              <Link className="nav-link" to="/category/laptops">
                Laptops
              </Link>
            </li>

            <li className="nav-item mx-4">
              <Link className="nav-link" to="/category/tablets">
                Tablets
              </Link>
            </li>

            <li className="nav-item mx-4">
              <Link className="nav-link" to="/category/womens-watches">
                Women Watches
              </Link>
            </li>

            <li className="nav-item mx-4">
              <Link className="nav-link" to="/category/mens-watches">
                Men Watches
              </Link>
            </li>
          </ul>
        </div>

        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;

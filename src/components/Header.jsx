import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Header() {
  return (
    <nav className="indigo lighten-2">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          React Shop
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };

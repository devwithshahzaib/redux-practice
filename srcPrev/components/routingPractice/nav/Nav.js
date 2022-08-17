import {Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      Nav
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/help">Help</Link>
          </li>
          <li>
            <Link to="/classComponent">Class Component</Link>
          </li>
          <li>
            <Link to="/functionalComponent">Functional Component</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
    </nav>
  );
}

export default Navbar;
/*Shows a navigation bar
Contains a "Home" link
Uses React Router for smooth navigation*/
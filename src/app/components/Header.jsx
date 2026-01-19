import { Link, useLocation } from "react-router-dom";
import "../../assets/styles/Header.scss";
import logo from "../../assets/images/wealth_health_logo.webp";

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="siteHeader">
      <img src={logo} alt="logo" />
      <h1>HRnet</h1>
      <div className="linkHeader">
        {isHome ? (
          <Link to="/employees">☰ Current employees</Link>
        ) : (
          <Link to="/">+ add employee</Link>
        )}
      </div>
    </header>
  );
}

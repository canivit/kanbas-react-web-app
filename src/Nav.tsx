import { Link, useLocation } from "react-router-dom";

function Nav() {
  const { pathname } = useLocation();
  const activeClass = getActiveClass(pathname);
  return (
    <nav className="nav nav-tabs mt-2">
      <Link className={`nav-link ${activeClass("a3")}`} to="/Labs/a3">
        A3
      </Link>
      <Link className={`nav-link ${activeClass("a4")}`} to="/Labs/a4">
        A4
      </Link>
      <Link className={`nav-link ${activeClass("a5")}`} to="/Labs/a5">
        A5
      </Link>
      <Link className={`nav-link ${activeClass("hello")}`} to="/hello">
        Hello
      </Link>
      <Link className={`nav-link ${activeClass("Kanbas")}`} to="/Kanbas">
        Kanbas
      </Link>
    </nav>
  );
}

function getActiveClass(pathname: string) {
  return (check: string) => (pathname.includes(check) ? "active" : "");
}

export default Nav;

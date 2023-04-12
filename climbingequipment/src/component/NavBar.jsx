import { Outlet, Link } from "react-router-dom";
import { auth } from "../config/firebase";

function NavBar() {
  console.log(auth.currentUser);
  if (auth.currentUser) {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link to="/">Logo</Link>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="type" className="nav-link">
                    Type
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="brand" className="nav-link">
                    Brand
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="signup" className="nav-link">
                    Sign Up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="logout" className="nav-link">
                    Log Out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Outlet />
      </>
    );
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/">Logo</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="type" className="nav-link">
                  Type
                </Link>
              </li>
              <li className="nav-item">
                <Link to="brand" className="nav-link">
                  Brand
                </Link>
              </li>
              <li className="nav-item">
                <Link to="signup" className="nav-link">
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link to="login" className="nav-link">
                  Log In
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default NavBar;
import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { auth } from "../config/firebase";

function NavBar() {
  const login = useSelector((state) => state.log.value);

  if (login) {
    var logFlag = (
      <Link to="logout" className="nav-link">
        Log Out
      </Link>
    );
    var welcomeMsg = `Welcome ${auth.currentUser.email}`;
  } else {
    var logFlag = (
      <Link to="login" className="nav-link">
        Log In
      </Link>
    );
    var welcomeMsg = "Welcome guest";
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg rounded mt-2">
        <div className="container-fluid">
          <Link to="/">
            <p></p>
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={{ color: "white", fontWeight: "bold" }}
                >
                  {welcomeMsg}
                </Link>
              </li>
              <li className="nav-item">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </li>
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
              <li className="nav-item">{logFlag}</li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default NavBar;

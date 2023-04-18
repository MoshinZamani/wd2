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
    var signUpFlag = "";
    var welcomeMsg = `Welcome ${auth.currentUser.email}`;
  } else {
    var logFlag = (
      <Link to="login" className="nav-link">
        Log In
      </Link>
    );
    var signUpFlag = (
      <Link to="signup" className="nav-link">
        Sign Up
      </Link>
    );
    var welcomeMsg = "Guest";
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg rounded mt-2">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item message">
              <Link
                className="nav-link"
                style={{ color: "white", fontWeight: "bold" }}
              >
                {welcomeMsg}
              </Link>
            </li>
            <li className="nav-item ml-auto">
              <Link to="/" className="nav-link home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="type" className="nav-link type">
                Type
              </Link>
            </li>
            <li className="nav-item">
              <Link to="brand" className="nav-link brand">
                Brand
              </Link>
            </li>
            <li className="nav-item signup">{signUpFlag}</li>
            <li className="nav-item login">{logFlag}</li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default NavBar;

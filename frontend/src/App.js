import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Brand from "./component/Brand";
import Type from "./component/Type";
import Signup from "./component/Signup";
import NavBar from "./component/NavBar";
import Login from "./component/common/Login";
import Help from "./component/Help";
import BrandProduct from "./component/BrandProduct";
function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route element={<NavBar />}>
            <Route path="brand" element={<Brand />}>
              <Route path=":brand" element={<Brand />} />
            </Route>
            <Route path="type" element={<Type />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="help" element={<Help />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

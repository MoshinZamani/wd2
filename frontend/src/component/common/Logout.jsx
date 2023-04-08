import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// import { signOut } from "firebase/auth";
// import { auth } from "../../config/auth";
import { OUT } from "../../feature/log/logSlice";
import { useDispatch, useSelector } from "react-redux";

const Logout = () => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.log.value);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(OUT());
    navigate("/home");
  });
};

export default Logout;

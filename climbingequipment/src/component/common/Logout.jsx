import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../config/auth";

const Logout = async () => {
  const navigate = useNavigate();
  try {
    await signOut(auth);
    navigate("/");
  } catch (err) {
    console.error(err);
  }
};

export default Logout;

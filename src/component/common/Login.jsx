import { ToastContainer, toast } from "react-toastify";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Joi from "joi-browser";
import { validateAll, validateField } from "./Validate";
import { auth } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { IN } from "../../feature/log/logSlice";
import { useDispatch } from "react-redux";
import Input from "./Input";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const schema = {
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().min(6).required().label("Password"),
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setInputs({ ...inputs, [name]: value });
    const newSchema = { [target.name]: schema[target.name] };
    const message = validateField(target, newSchema);
    if (!message) setErrors({ ...errors, [target.name]: "" });
    setErrors({
      ...errors,
      [target.name]: message,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateAll(inputs, schema);
    if (newErrors.length === 0) {
      try {
        await signInWithEmailAndPassword(auth, inputs.email, inputs.password);
        dispatch(IN());
        navigate("/brand");
      } catch (err) {
        console.error(err);
        toast(err.message);
      }
    }
    setErrors(newErrors);
  };

  return (
    <>
      <ToastContainer />
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <Input
          label="Email"
          name="email"
          value={inputs.email}
          onChange={handleChange}
          error={errors.email}
        />
        <br />
        <Input
          label="Password"
          name="password"
          value={inputs.password}
          onChange={handleChange}
          error={errors.password}
        />
        <br />
        <button role="button" className="btn btn-primary">
          Log in
        </button>
      </form>
      <br />
    </>
  );
}

export default Login;

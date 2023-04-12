import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Joi from "joi-browser";
import { validateAll, validateField } from "./Validate";
import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { OUT, IN } from "../../feature/log/logSlice";
import { useSelector, useDispatch } from "react-redux";
import Input from "./Input";

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
        await createUserWithEmailAndPassword(
          auth,
          inputs.email,
          inputs.password
        );
        dispatch(IN());
        navigate("/brand");
      } catch (err) {
        console.error(err);
      }
    }
    setErrors(newErrors);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          label="Email"
          name="email"
          value={inputs.email}
          onChange={handleChange}
          error={errors.email}
        />

        <Input
          label="Password"
          name="password"
          value={inputs.password}
          onChange={handleChange}
          error={errors.password}
        />

        <button className="btn btn-primary">Log in</button>
      </form>
    </>
  );
}

export default Login;

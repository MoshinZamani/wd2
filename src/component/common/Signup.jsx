import React, { useState } from "react";
import Joi from "joi-browser";
import { validateAll, validateField } from "./Validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useDispatch } from "react-redux";
import Input from "./Input";
import { OUT, IN } from "../../feature/log/logSlice";
import { useNavigate } from "react-router-dom";
function Signup() {
  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const schema = {
    fullName: Joi.string().min(2).label("Full name"),
    password: Joi.string().min(6).label("Password"),
    pswConfirmation: Joi.string().min(6).label("Password"),
    email: Joi.string().email().required().label("Email"),
  };

  const handleChange = ({ target }) => {
    setInputs({ ...inputs, [target.name]: target.value });
    const newSchema = {
      [target.name]: schema[target.name],
    };
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
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <Input
          label="Full Name"
          name="fullName"
          value={inputs.fullName}
          onChange={handleChange}
          error={errors.fullName}
        />
        <br />
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
        <Input
          label="Password Confirmation"
          name="pswConfirmation"
          value={inputs.pswConfirmation}
          onChange={handleChange}
          error={errors.pswConfirmation}
        />
        <br />
        <label htmlFor="experience">Years of experience</label>
        <select name="experience" id="experience" className="form-control">
          <option value="less">less than one year</option>
          <option value="between">between one and 3 years</option>
          <option value="more">more than three years</option>
        </select>
        <br />
        <button role="button" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>
      <br />
    </>
  );
}

export default Signup;

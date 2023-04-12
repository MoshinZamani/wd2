import React, { useState } from "react";
import Joi from "joi-browser";
import { validateAll, validateField } from "./common/Validate";
import Input from "./common/Input";

function Signup() {
  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const schema = {
    fullName: Joi.string().min(2).label("Full name"),
    password: Joi.string().min(3).label("Password"),
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateAll(inputs, schema));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Full Name"
        name="fullName"
        value={inputs.fullName}
        onChange={handleChange}
        error={errors.fullName}
      />
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

      <label htmlFor="experience">Years of experience</label>
      <select name="experience" id="experience" className="form-control">
        <option value="less">less than one year</option>
        <option value="between">between one and 3 years</option>
        <option value="more">more than three years</option>
      </select>

      <button className="btn btn-primary">Submit</button>
    </form>
  );
}

export default Signup;

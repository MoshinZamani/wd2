import Joi from "joi-browser";

export function validateAll(inputs, schema) {
  const option = { abortEarly: false };
  const { error } = Joi.validate(inputs, schema, option);
  let newErrors = [];

  if (!error) return newErrors;
  for (let item of error.details)
    newErrors = { ...newErrors, [item.path[0]]: item.message };
  return newErrors;
}

export const validateField = ({ name, value }, newSchema) => {
  const field = { [name]: value };
  const { error } = Joi.validate(field, newSchema);
  return !error ? null : error.details[0].message;
};

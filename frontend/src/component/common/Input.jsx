const Input = ({ label, name, value, onChange, error }) => {
  return (
    <>
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input
          id={name}
          name={name}
          type={name === "password" ? "password" : "text"}
          className="form-control"
          value={value}
          onChange={onChange}
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </>
  );
};

export default Input;

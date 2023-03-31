import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [value, setValue] = useState("Learn the best better");
  const [messageClasses, setMessageClasses] = useState("rounded col-3");

  const handleMouseEnter = (tag) => {
    const values = [
      { tag: "main", value: "Learn the best better" },
      { tag: "type", value: "Find everything by type" },
      { tag: "brand", value: "Organised on brands" },
      {
        tag: "signup",
        value: "Sign up and talk to one of our experts to learn more",
      },
      {
        tag: "login",
        value: "Unlock the climbing world",
      },
    ];
    setValue(
      values.map((n) => {
        if (n.tag === tag) return n.value;
      })
    );
    if (tag === "signup") {
      setMessageClasses("rounded col-5");
    }
  };

  const handleMouseLeave = () => {
    setValue("Learn the best better");
    setMessageClasses("rounded col-3");
  };

  return (
    <>
      <div
        className="row justify-content-center align-items-center"
        style={{ height: "200px" }}
      ></div>
      <div className="row justify-content-center align-items-center">
        <div className={messageClasses}>
          <p style={{ color: "white" }}>{value}</p>
        </div>
      </div>
      <div className="row justify-content-center align-items-center">
        <div className="col-3">
          <Link
            to="type"
            className="btn btn-primary btn-lg active btn-block mb-2"
            onMouseEnter={() => handleMouseEnter("type")}
            onMouseLeave={handleMouseLeave}
            role="button"
            aria-pressed="true"
          >
            Type
          </Link>
        </div>
        <div
          className="col-3"
          style={{
            backgroundImage: `url("https://https://www.climbingshoereview.com/wp-content/uploads/2021/04/Best-Climbing-Shoe-Brands.jpg")`,
          }}
        >
          <Link
            to="brand"
            style={{ backgroundImage: `url("../../logo/brands.jpg")` }}
            className="btn btnprimarybackground btn-lg active btn-block mb-2"
            onMouseEnter={() => handleMouseEnter("brand")}
            onMouseLeave={handleMouseLeave}
            role="button"
            aria-pressed="true"
          >
            Brand
          </Link>
        </div>
      </div>
      <div className="row justify-content-center align-items-center">
        <div className="col-6">
          <Link
            to="login"
            className="btn btn-secondary btn-lg active btn-block mb-2"
            onMouseEnter={() => handleMouseEnter("login")}
            onMouseLeave={handleMouseLeave}
            role="button"
            aria-pressed="true"
          >
            Log In
          </Link>
        </div>
      </div>
      <div className="row justify-content-center align-items-center">
        <div className="col-6">
          <Link
            to="signup"
            className="btn btn-danger btn-lg active btn-block"
            onMouseEnter={() => handleMouseEnter("signup")}
            onMouseLeave={handleMouseLeave}
            role="button"
            aria-pressed="true"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;

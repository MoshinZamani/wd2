import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [value, setValue] = useState("Learn Deeper Climb Higher");
  const [messageClasses, setMessageClasses] = useState("rounded col-12");

  const handleMouseEnter = (tag) => {
    const values = [
      { tag: "main", value: "Learn Deeper Climb Higher" },
      { tag: "type", value: "Find everything by type" },
      { tag: "brand", value: "Organised on brands" },
      {
        tag: "signup",
        value: "Sign up for expertise",
      },
      {
        tag: "login",
        value: "Unlock climbing world",
      },
    ];
    setValue(
      values.map((n) => {
        if (n.tag === tag) return n.value;
      })
    );
    if (tag === "signup") {
      setMessageClasses("rounded col-12");
    } else if (tag === "login") {
      setMessageClasses("rounded col-12");
    }
  };

  const handleMouseLeave = () => {
    setValue("Learn Deeper Climb Higher");
    setMessageClasses("rounded col-12");
  };

  return (
    <>
      <div className="grid-home">
        <div className="firstrow">
          <h2 className={messageClasses}>{value}</h2>
        </div>
        <div className="secondrow">
          <div className="type col-6">
            <Link
              to="type"
              className=""
              onMouseEnter={() => handleMouseEnter("type")}
              onMouseLeave={handleMouseLeave}
              role="button"
              aria-pressed="true"
            >
              <h1>Type</h1>
            </Link>
          </div>
          <div className="brand col-6">
            <Link
              to="brand"
              className=""
              onMouseEnter={() => handleMouseEnter("brand")}
              onMouseLeave={handleMouseLeave}
              role="button"
              aria-pressed="true"
            >
              <h1>Brand</h1>
            </Link>
          </div>
        </div>
        <div className="thirdrow">
          <div className="">
            <Link
              to="login"
              className="login"
              onMouseEnter={() => handleMouseEnter("login")}
              onMouseLeave={handleMouseLeave}
              role="button"
              aria-pressed="true"
            >
              Log In
            </Link>
          </div>
          <div>
            <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          </div>
          <div className="">
            <Link
              to="signup"
              className="signup"
              onMouseEnter={() => handleMouseEnter("signup")}
              onMouseLeave={handleMouseLeave}
              role="button"
              aria-pressed="true"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      {/* <div
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
            className="btn btn-lg btn-block mb-2 btn-home"
            onMouseEnter={() => handleMouseEnter("type")}
            onMouseLeave={handleMouseLeave}
            role="button"
            aria-pressed="true"
          >
            Type
          </Link>
        </div>
        <div className="col-3">
          <Link
            to="brand"
            style={{ backgroundImage: `url("../../logo/brands.jpg")` }}
            className="btn btn-primary-background btn-lg btn-block mb-2 btn-home"
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
      </div> */}
    </>
  );
}

export default Home;

import React, { useState } from "react";
import { Link } from "react-router-dom";

/* Home page
hovering on different links, shows different messages */

function Home() {
  const [value, setValue] = useState("Learn Deeper Climb Higher");
  const [messageClasses, setMessageClasses] = useState("rounded col-12");

  const handleMouseEnter = (tag) => {
    const values = [
      { tag: "main", value: "Learn Deeper Climb Higher" },
      { tag: "type", value: "Categorized by type" },
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
              &nbsp;&nbsp;&nbsp;&nbsp; Log In
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
    </>
  );
}

export default Home;

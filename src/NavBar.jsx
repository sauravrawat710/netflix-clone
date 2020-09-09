import React, { useState, useEffect } from "react";
import "./NavBar.css";

function NavBar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`navBar ${show && "navBar__black"}`}>
      <img
        className="navBar__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />

      <img
        className="navBar__avatar"
        src="https://pbs.twimg.com/media/DlKNEufWsAAgr2E?format=jpg&name=small"
        alt="Netflix Avatar"
      />
    </div>
  );
}

export default NavBar;

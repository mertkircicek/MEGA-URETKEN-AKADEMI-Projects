// Menu.js
import React from "react";

const Menu = () => {
  return (
    <section className="menu">
      <div className="left-menu">MEGA</div>
      <div className="right-menu">
        <span>
          <a href="/">Projects</a>
        </span>
        <span>
          <a href="/">Skills</a>
        </span>
        <span>
          <a href="/">Accounts</a>
        </span>
      </div>
    </section>
  );
};

export default Menu;
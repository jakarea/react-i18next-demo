import React from "react";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <ul>
      <li>
        <NavLink exact to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li style={{'float':'right'}}>
        <select className="custom-select">
          <option value="">Change Language</option>
          <option value="zh">中文</option>
          <option value="es">Español</option>
          <option value="en">English</option>
          <option value="hi">हिन्दी</option>
          <option value="ar">عربى</option>
          <option value="bn">বাংলা</option>
          <option value="pt">Português</option>
          <option value="ro">русский</option>
          <option value="ja">日本語</option>
          <option value="ta">తమిళ</option>
        </select>
      </li>
    </ul>
  );
};

export default Navbar;

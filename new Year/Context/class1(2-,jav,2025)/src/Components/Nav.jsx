// Components/Nav.jsx
import React from "react";

const Nav = ({ data }) => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        {data.map((link, index) => (
          <li key={index}>
            <a href={link.path} className="text-white hover:text-gray-400 transition"> {link.name} </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;

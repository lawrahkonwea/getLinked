import React from "react";
import getlink from "../assets/getlinked.png";
import './Header.css';

export const Header = () => {
  return (
    <nav className="header">
    <div><img src={getlink} alt="getlinked" /></div>
    <ul className="nav-list">
      <li className="nav-item">
          Timeline
      </li>
      <li className="nav-item">
          Overview
      </li>
      <li className="nav-item">
          FAQs
      </li>
      <li className="nav-item">
          Contacts
      </li> 
    </ul>
    <button className="nav-button" type="button">Register</button>
  </nav>
  )
}

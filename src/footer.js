import React, { Component } from "react";
import copyright from './resources/copyright.svg'
function Footer() {
  return (
    <div className="ps-link">
      <a
        href="http://darvinsinaga.com"
        
        target="_blank"
      >
        <h2> darvinsinaga.com </h2>
      </a>
      <span>
        <img
          className="ps-link-img cp"
          src={copyright}
          alt="copyright"
        />
        <h2 className="ps-float-right">
          {" "}
          {new Date().getFullYear()}, {"\u00A0"} All rights reserved{" "}
        </h2>
      </span>
    </div>
  );
}
export default Footer;

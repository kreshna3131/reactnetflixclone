import React from "react"
//import { Link, withRouter } from "react-router-dom";
//import "materialize-css/dist/css/materialize.min.css";

const Footer = () => {
  return (
    <>
      <footer
        className="footer-distributed"
        style={{ background: "black", color: "gray" }}
      >
        <div className="footer-right">
          <img
            alt="logo"
            style={{ width: "160px", height: "40px" }}
            src="https://fontmeme.com/permalink/221019/5d162b56a34407491de7cfb86d77bfd0.png"
          />
        </div>

        <div className="footer-left">
          <p className="footer-links">
            <p style={{ color: "grey" }}>
              A free movie streaming application built by Kreshna Putra
            </p>
          </p>

          <p>
            <span style={{ color: "#cc0000" }}>Kreshna Putra</span> &copy; 2022
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer

import React from "react";
import { Link } from "react-router-dom";

import LeftNav from "./LeftNavContent";
import RightNav from "./RightNavContent";
import MidNavContent from "./MidNavContent";

import Logo from "../../images/StrongLifeLogo.png"

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        
        <Link className="nav-link text-light deskHome" to="/">
          Home
        </Link>

        <Link className="mobileBrand" to="/">
          <img height="50px" width="50px" src={Logo}></img>
        </Link>

        <button
          className="navbar-toggler justify-content-end"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Justify-content-between will 
                    create the effect of left middle and end Nav Objects */}
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarText"
        >
          <ul className="navbar-nav">
            <LeftNav />
          </ul>

          <MidNavContent />

          <ul className="navbar-nav">
            <RightNav />
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

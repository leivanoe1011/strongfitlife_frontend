import React from "react";
import logo from "../../images/StrongLifeLogo.png";
import {Link} from "react-router-dom";

function MidNavContent() {
  return (
    <>
      <Link to="/">
        <img style={{ width: 125 }} className="d-none d-lg-block" src={logo} />
      </Link>
    </>
  );
}

export default MidNavContent;

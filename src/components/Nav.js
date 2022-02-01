import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div class="d-flex justify-content-center align-items-center customNav">
      <div>
        <ul className="nav nav-justified">
          <li className="nav-item">
            <Link className="btn  btn-block btn-squared" to={`/`}>
              <div className="text-white navTitle">Home</div>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="btn  btn-block btn-squared" to={`/Services`}>
              <div className="text-white navTitle">Services</div>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="btn  btn-block btn-squared" to={`/Team`}>
              <div className="text-white navTitle">Team</div>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="btn  btn-block btn-squared" to={`/About`}>
              <div className="text-white navTitle">About</div>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="btn  btn-block btn-squared" to={`/Account`}>
              <div className="text-white navTitle">Account</div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;

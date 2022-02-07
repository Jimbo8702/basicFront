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
            <Link className="btn  btn-block btn-squared" to={`/Marketplace`}>
              <div className="text-white navTitle">MarketPlace</div>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="btn  btn-block btn-squared" to={`/Wallet`}>
              <div className="text-white navTitle">Wallet</div>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="btn  btn-block btn-squared" to={`/Upload`}>
              <div className="text-white navTitle">Upload</div>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="btn  btn-block btn-squared" to={`/Signup`}>
              <div className="text-white navTitle">Signup</div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;

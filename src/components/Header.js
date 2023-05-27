import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="main-con">
      <div className="main-header">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
              <h3>MJM INFRA</h3>
              <p>land acquisition & holding</p>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item home">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item about">
                  <Link className="nav-link" to="/about">
                    About Company
                  </Link>
                </li>

                <li className="nav-item  faq">
                  <Link className="nav-link" to="/faq">
                    Faq's
                  </Link>
                </li>
                <li className="nav-item service">
                  <Link className="nav-link" to="/service">
                    Services
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Ratnagiri
                  </Link>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" to="about-ratnagiri.php">
                      About Ratnagiri
                    </Link>
                    <Link className="dropdown-item" to="why-ratnagiri.php">
                      Why Ratnagiri
                    </Link>
                    <Link className="dropdown-item" to="konkan.php">
                      Konkan Map
                    </Link>
                  </div>
                </li>

                <li className="nav-item contact">
                  <Link className="nav-link" to="contact-us.php">
                    Contacts
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;

import { useState } from "react";
import { Link } from "react-router-dom";
import { Howl } from "howler";
import logo from "../../public/title-icon.png";
import clickSound from "../assets/audio/click-sound.mp3";
import signUpSound from "../assets/audio/sign-up.mp3";
import "./NavBar.css";

// Initialize the Howl object
const clickSoundHowl = new Howl({
  src: [clickSound],
});

const signUpSoundHowl = new Howl({
  src: [signUpSound],
});

export default function NavBar() {
  const playClickSound = () => {
    clickSoundHowl.play();
  };

  const playSignUpSound = () => {
    signUpSoundHowl.play();
  };

  const [activeNav, setActiveNav] = useState("");

  return (
    <div>
      <header className="py-2 border-bottom bg-light">
        <div className="container d-flex flex-wrap justify-content-center">
          <Link
            to="/"
            className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none"
            onClick={() => {
              playClickSound();
              setActiveNav("Home");
            }}
          >
            <img
              src={logo}
              className="bi me-2"
              width="40"
              height="32"
              alt="Logo"
            />
            <span className="fs-4 brand-name">Mr HandY</span>
          </Link>
          <div className="col-9 col-lg-auto mb-3 mb-md-0">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search items..."
                aria-label="Search items..."
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                <i className="bi bi-search-heart"></i>
              </button>
            </div>
          </div>
          <div className="col-1 col-lg-auto m-3 mt-0 mb-0 mb-md-0">
            <i
              className="bi bi-cart-check-fill h2 text-dark-emphasis"
              role="button"
            ></i>
          </div>
        </div>
      </header>

      <nav
        className="navbar navbar-expand-lg bg-dark border-bottom py-lg-2 m-0"
        data-bs-theme="dark"
      >
        <div className="container">
          <Link
            to="/"
            className="navbar-brand d-block d-lg-none"
            onClick={playClickSound}
          >
            Handy Clothings
          </Link>
          <button
            className="navbar-toggler shadow-none border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="sidebar offcanvas offcanvas-start"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header text-white border-bottom">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Find Your Fashion...
              </h5>
              <button
                type="button"
                className="btn-close shadow-none"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            {/* Sidebar Body */}

            <div className="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">
              <ul className="navbar-nav justify-content-center align-items-center flex-grow-1 pe-3">
                <li className="nav-item dropdown">
                  <Link
                    to="/tshirt"
                    className={`nav-link dropdown-toggle ${
                      activeNav === "T-Shirt" ? "text-info" : ""
                    }`}
                    id="navbarDropdownTShirt"
                    role="button"
                    aria-expanded="false"
                    onMouseEnter={() => setActiveNav("T-Shirt")}
                    onMouseLeave={() => setActiveNav("")}
                  >
                    T-Shirt
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownTShirt"
                  >
                    <li>
                      <Link className="dropdown-item" to="#">
                        Crewneck Tee
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Collar Tee
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className={`nav-link dropdown-toggle ${
                      activeNav === "Color Pant" ? "text-info" : ""
                    }`}
                    id="navbarDropdownColorPant"
                    role="button"
                    aria-expanded="false"
                    onMouseEnter={() => setActiveNav("Color Pant")}
                    onMouseLeave={() => setActiveNav("")}
                  >
                    Color Pant
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownColorPant"
                  >
                    <li>
                      <Link className="dropdown-item" to="#">
                        Chino Pant
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Jogger Pant
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className={`nav-link dropdown-toggle ${
                      activeNav === "Shirt" ? "text-info" : ""
                    }`}
                    id="navbarDropdownShirt"
                    role="button"
                    aria-expanded="false"
                    onMouseEnter={() => setActiveNav("Shirt")}
                    onMouseLeave={() => setActiveNav("")}
                  >
                    Shirt
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownShirt"
                  >
                    <li>
                      <Link className="dropdown-item" to="#">
                        Short Sleeve
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Long Sleeve
                      </Link>
                    </li>
                  </ul>
                </li>

                {/* More dropdown menu */}
                <li className="nav-item dropdown">
                  <Link
                    to="/ourStore"
                    className={`nav-link dropdown-toggle ${
                      activeNav === "More" ? "text-info" : ""
                    }`}
                    id="navbarDropdownMore"
                    role="button"
                    aria-expanded="false"
                    onMouseEnter={() => setActiveNav("More")}
                    onMouseLeave={() => setActiveNav("")}
                  >
                    More...
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMore"
                  >
                    <li className="dropdown-submenu">
                      <Link className="dropdown-item dropdown-toggle" to="#">
                        Shorts
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link className="dropdown-item" to="#">
                            Chino Pant Short
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            Plastic Short
                          </Link>
                        </li>
                        <li className="dropdown-submenu">
                          <Link
                            className="dropdown-item dropdown-toggle"
                            to="#"
                          >
                            Denim Short
                          </Link>
                          <ul className="dropdown-menu">
                            <li>
                              <Link className="dropdown-item" to="#">
                                Patch
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                Non Patch
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            Pocket Short
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown-submenu">
                      <Link className="dropdown-item dropdown-toggle" to="#">
                        Denims
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link className="dropdown-item" to="#">
                            Patch
                          </Link>
                          <ul className="dropdown-menu">
                            <li>
                              <Link className="dropdown-item" to="#">
                                Boy Gold
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            Non Patch
                          </Link>
                          <ul className="dropdown-menu">
                            <li>
                              <Link className="dropdown-item" to="#">
                                Boy Gold
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown-submenu">
                      <Link className="dropdown-item dropdown-toggle" to="#">
                        Dry Fit
                      </Link>
                      <ul className="dropdown-menu">
                        <li>
                          <Link className="dropdown-item" to="#">
                            T-Shirt
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            Shirt
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="#">
                            Bottom
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link
                        to="/caps"
                        className="dropdown-item"
                        onClick={() => {
                          playClickSound();
                          setActiveNav("Caps");
                        }}
                      >
                        Caps
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>

              <ul className="navbar-nav justify-content-center align-items-center flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link
                    to="/quickAssist"
                    className={`nav-link mx-2 ${
                      activeNav === "quick" ? "text-info" : " "
                    }`}
                    aria-current="page"
                    onClick={() => {
                      playClickSound();
                      setActiveNav("quick");
                    }}
                  >
                    Quick Assist
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/aboutUs"
                    className={`nav-link mx-2 ${
                      activeNav === "about" ? "text-info" : " "
                    }`}
                    aria-current="page"
                    onClick={() => {
                      playClickSound();
                      setActiveNav("about");
                    }}
                  >
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/"
                    className={`nav-link mx-2 ${
                      activeNav === "location" ? "text-info" : " "
                    }`}
                    aria-current="page"
                    onClick={() => {
                      playClickSound();
                      setActiveNav("location");
                    }}
                  >
                    Store Location
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/"
                    className={`nav-link mx-2 ${
                      activeNav === "contact" ? "text-info" : ""
                    }`}
                    aria-current="page"
                    onClick={() => {
                      playClickSound();
                      setActiveNav("contact");
                    }}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>

              {/* Login, Sign up */}
              <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-3">
                <Link to="/signin" className="text-white">
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="text-white text-decoration-none px-3 py-1 rounded-4 sign-up-btn"
                  onClick={() => {
                    playSignUpSound();
                  }}
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

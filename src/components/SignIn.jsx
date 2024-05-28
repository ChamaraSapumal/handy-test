import { Link } from "react-router-dom";
import "./SignIn.css"; // Importing the CSS file
import sideImage from "../assets/images/loginSideImg.jpg";

export default function SignIn() {
  return (
    <div className="signup-container">
      <div className="wrapper">
        <div className="container main">
          <div className="row">
            <div className="col-md-6 right">
              <div className="input-box">
                <header>Please sign in</header>
                <div className="input-field">
                  <input
                    type="email"
                    className="input"
                    id="email"
                    required
                    autoComplete="off"
                  />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="input-field">
                  <input
                    type="password"
                    className="input"
                    id="password"
                    required
                  />
                  <label htmlFor="password">Password</label>
                </div>
                <div className="input-field">
                  <input type="submit" className="submit" value="Sign in" />
                </div>
                <div className="signin">
                  <span>
                    New user?{" "}
                    <Link to="/signup" href="#">
                      Create an account
                    </Link>
                  </span>
                </div>
                <div className="back-home">
                  <Link to="/" className="back-home-link">
                    <i className="bi bi-arrow-left-circle-fill back-home-icon"></i>
                    Go Back to Home
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 side-image"
              style={{ backgroundImage: `url(${sideImage})` }}
            >
              <div className="text">
                <p>Join our community</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

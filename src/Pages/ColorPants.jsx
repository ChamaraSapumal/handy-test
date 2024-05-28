import "../components/BreadCrum.css";
import { Link } from "react-router-dom";

export default function ColorPants() {
  return (
    <div>
      <div className="our-store-container">
        <nav className="breadcrumb-nav" aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/" className="breadcrumb-link">
                Home
              </Link>
            </li>

            <li className="breadcrumb-item">
              <Link to="/ourStore" className="breadcrumb-link">
                Our store
              </Link>
            </li>

            <li className="breadcrumb-item active" aria-current="page">
              Color Pants
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}

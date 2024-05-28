import "./OurStore.css";
import tshirt from "../assets/images/ourStore/tshirt.png";
import shirt from "../assets/images/ourStore/shirt.png";
import shorts from "../assets/images/ourStore/shorts.png";
import colorPants from "../assets/images/ourStore/colorPants.png";
import denims from "../assets/images/ourStore/denim.png";
import dryFits from "../assets/images/ourStore/dryFit.png";
import caps from "../assets/images/ourStore/caps.png";
import { Link } from "react-router-dom";

export default function OurStore() {
  const categories = [
    { name: "T-shirts", img: tshirt, items: 25, link: "/tshirt" },
    { name: "Shorts", img: shorts, items: 18, link: "/shorts" },
    { name: "Color Pants", img: colorPants, items: 22, link: "/color-pants" },
    { name: "Shirts", img: shirt, items: 25, link: "/shirts" },
    { name: "Denims", img: denims, items: 30, link: "/denims" },
    { name: "Dry fit", img: dryFits, items: 40, link: "/dry-fit" },
    { name: "Caps", img: caps, items: 5, link: "/caps" },
  ];

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
            <li className="breadcrumb-item active" aria-current="page">
              Our Store
            </li>
          </ol>
        </nav>
      </div>

      <div className="container pt-5">
        <div className="row">
          {categories.map((category, index) => (
            <div
              className="col-lg-3 col-md-3 col-sm-4 col-6 card-container text-center mb-4"
              key={index}
            >
              <Link to={category.link} className="text-decoration-none">
                <div className="card h-100">
                  <img
                    src={category.img}
                    className="card-img-top"
                    alt={category.name}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{category.name}</h5>
                    <p className="card-text">{category.items} items</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

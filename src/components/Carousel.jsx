import carouselImg1 from "../assets/images/carouselImg1.jpg";
import carouselImg2 from "../assets/images/carouselImg2.jpg";
import carouselImg3 from "../assets/images/carouselImg3.jpg";
import carouselImg4 from "../assets/images/carouselImg4.jpg";
import carouselImg5 from "../assets/images/carouselImg5.jpg";
import "./Carousel.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Carousel() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <div>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active c-item">
            <img src={carouselImg1} className="d-block w-100 c-img" alt="..." />
            <div className="carousel-caption mt-5" data-aos="fade-up">
              <h1 className="display-1 fw-bolder text-capitalize text-center">
                Unique Handcrafted Designs
              </h1>
              <p>Wearable art by our artist.</p>
            </div>
          </div>
          <div className="carousel-item c-item">
            <img src={carouselImg2} className="d-block w-100 c-img" alt="..." />
            <div className="carousel-caption align-self-start top-0">
              <h1
                className="display-1 fw-bolder text-capitalize text-center"
                data-aos="fade-up"
              >
                Limited Edition Prints
              </h1>
              <p className="mt-lg-5 pt-lg-4 h3">
                Rare designs, limited availability.
              </p>
            </div>
          </div>
          <div className="carousel-item c-item">
            <img src={carouselImg3} className="d-block w-100 c-img" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h1 className="display-1 fw-bolder text-capitalize text-center">
                Eco-Friendly Materials
              </h1>
              <p className="mt-lg-5 pt-lg-4 h3">
                Sustainable, planet-friendly t-shirts.
              </p>
            </div>
          </div>
          <div className="carousel-item c-item">
            <img src={carouselImg4} className="d-block w-100 c-img" alt="..." />
            <div className="carousel-caption align-self-start top-0 mt-4 ">
              <h1 className="display-1 fw-bolder text-capitalize shadow-lg">
                Join Our Art Community
              </h1>
              <p>Exclusive designs and special offers.</p>
            </div>
          </div>
          <div className="carousel-item c-item">
            <img src={carouselImg5} className="d-block w-100 c-img" alt="..." />
            <div className="carousel-caption align-self-start top-0 mt-4 ">
              <h1 className="display-1 fw-bolder text-capitalize shadow-lg">
                Feel like your place
              </h1>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="bg-dark-subtle shadow-lg">
        <div className="container">
          <div className="row gy-md-2">
            <div className="col-md-4 mt-md-4 text-center">
              <div className="fs-5 p-transition">
                <i className="bi bi-truck display-2"></i>
                <h3>Island Wide Delivery</h3>
              </div>
              <h6 className="d-none d-md-block">
                Your items shipped island-wide, at no extra cost.
              </h6>
            </div>
            <div className="col-md-4 mt-md-4 text-center">
              <div className="fs-5">
                <i className="bi bi-arrow-left-right display-2"></i>
                <h3>Returns And Exchange Available</h3>
              </div>
              <h6 className="d-none d-md-block">
                Returns and exchanges are readily available for your
                convenience.
              </h6>
            </div>
            <div className="col-md-4 mt-md-4 my-md-5 text-center">
              <div className="fs-5">
                <i className="bi bi-award display-2"></i>
                <h3>Comfort and Best Quality</h3>
              </div>
              <h6 className="d-none d-md-block">
                Experience both comfort and top-notch quality with our products.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

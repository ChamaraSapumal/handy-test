import "./Home.css";
import Carousel from "./Carousel";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { Card, Button } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";
import tshirt6 from "../assets/images/tshirt6.jpg";
import tshirt5 from "../assets/images/tshirt5.jpg";
import tshirt4 from "../assets/images/tshirt4.png";
import tshirt3 from "../assets/images/tshirt3.png";
import trendingMen from "../assets/images/TRENDINGMEN.png";
import trendingWomen from "../assets/images/TRENDINGwoMEN.png";

const { Meta } = Card;

const blackCardsData = [
  {
    image: tshirt4,
    title: "RS.1,990",
    description: "Boy’s Polo T-Shirt with single ",
    label: "New",
  },
  {
    image: tshirt4,
    title: "RS.1,990",
    description: "Boy’s Polo T-Shirt with single",
    label: "New",
  },
  {
    image: tshirt4,
    title: "RS.1,990",
    description: "Boy’s Polo T-Shirt with single",
    label: "Trending",
  },
  {
    image: tshirt4,
    title: "RS.1,990",
    description: "Boy’s Polo T-Shirt with single",
    label: "New",
  },
  {
    image: tshirt4,
    title: "RS.1,990",
    description: "Boy’s Polo T-Shirt with single",
    label: "Trending",
  },
  {
    image: tshirt4,
    title: "RS.1,990",
    description: "Boy’s Polo T-Shirt with single",
    label: "Trending",
  },
];

const WhiteCardsData = [
  {
    image: tshirt3,
    title: "RS.1,990",
    description: "Boy’s Polo T-Shirt with single ",
  },
  {
    image: tshirt3,
    title: "RS.1,990",
    description: "Boy’s Polo T-Shirt with single",
  },
  {
    image: tshirt3,
    title: "RS.1,990",
    description: "Boy’s Polo T-Shirt with single",
  },
  {
    image: tshirt3,
    title: "RS.1,990",
    description: "Boy’s Polo T-Shirt with single",
  },
  {
    image: tshirt3,
    title: "RS.1,990",
    description: "Boy’s Polo T-Shirt with single",
  },
  {
    image: tshirt3,
    title: "RS.1,990",
    description: "Boy’s Polo T-Shirt with single",
  },
];

const womenBlackCardsData = [
  {
    image: tshirt5,
    title: "RS.1,990",
    description: "Girl's Polo T-Shirt with single ",
    label: "New",
  },
  {
    image: tshirt6,
    title: "RS.1,990",
    description: "Girl's Polo T-Shirt with single",
    label: "New",
  },
  {
    image: tshirt5,
    title: "RS.1,990",
    description: "Girl's Polo T-Shirt with single",
    label: "New",
  },
  {
    image: tshirt6,
    title: "RS.1,990",
    description: "Girl's Polo T-Shirt with single",
    label: "New",
  },
  {
    image: tshirt5,
    title: "RS.1,990",
    description: "Girl's Polo T-Shirt with single",
    label: "New",
  },
  {
    image: tshirt6,
    title: "RS.1,990",
    description: "Girl's Polo T-Shirt with single",
    label: "New",
  },
];

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [activeSection, setActiveSection] = useState("black");

  return (
    <div>
      <Carousel />

      <div className="row d-flex align-items-center pb-4 pt-5">
        <div className="col">
          <hr />
        </div>
        <div className="col-auto">
          <h1 className="fw-semibold">This week new</h1>
        </div>
        <div className="col">
          <hr />
        </div>
      </div>

      <div className="container container-cards pt-5 pb-5">
        <div className="row gy-4">
          {blackCardsData.map((card, index) => (
            <div
              key={index}
              className="col-lg-2 col-md-3 col-sm-4 col-6 card-container text-center"
              data-aos="fade-up"
              data-aos-delay={index * 100} // Delays each card's animation
            >
              <Card
                hoverable
                className="card-custom"
                cover={<img alt={card.title} src={card.image} />}
              >
                <Meta
                  title={<span className="fw-bold">{card.title}</span>}
                  description={card.description}
                />
                <div className="buy-now-container">
                  <Button type="primary" className="buy-now-button">
                    Buy Now
                  </Button>
                </div>
                <div className="label-top shadow-sm">
                  <span className="text-white">{card.label}</span>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="container text-center pt-3 pb-5">
        <div className="row justify-content-center">
          <div className="col-md-4 " data-aos="fade-right" data-aos-delay="150">
            <a href="#">
              <img src={trendingMen} alt="" className="tranding-img" />
            </a>
          </div>
          <div className="col-md-4" data-aos="fade-left" data-aos-delay="150">
            <a href="#">
              <img src={trendingWomen} alt="" className="tranding-img" />
            </a>
          </div>
        </div>
      </div>

      <div className="row d-flex align-items-center pb-4 pt-5">
        <div className="col">
          <hr />
        </div>
        <div className="col-auto">
          <h1 className="fw-semibold">Men&apos;s Collection</h1>
        </div>
        <div className="col">
          <hr />
        </div>
      </div>

      <div className="container d-flex justify-content-center">
        <ul className="nav nav-underline ">
          <li className="nav-item h4">
            <span
              className={`nav-link ${
                activeSection === "black" ? "active" : ""
              }`}
              aria-current="page"
              onClick={() => setActiveSection("black")}
              role="button"
            >
              Black
            </span>
          </li>
          <li className="nav-item h4">
            <span
              className={`nav-link ${
                activeSection === "white" ? "active" : ""
              }`}
              onClick={() => setActiveSection("white")}
              role="button"
            >
              White
            </span>
          </li>
        </ul>
      </div>

      <div
        className={`container container-cards pt-5 pb-3  ${
          activeSection === "black" ? "" : "d-none"
        }`}
        id="black-items"
      >
        <div className="row gy-4">
          {blackCardsData.map((card, index) => (
            <div
              key={index}
              className="col-lg-2 col-md-3 col-sm-4 col-6 card-container text-center"
              data-aos="fade-up"
              data-aos-delay={index * 100} // Delays each card's animation
            >
              <Card
                hoverable
                className="card-custom"
                cover={<img alt={card.title} src={card.image} />}
              >
                <Meta
                  title={<span className="fw-bold">{card.title}</span>}
                  description={card.description}
                />
                <div className="buy-now-container">
                  <Button type="primary" className="buy-now-button">
                    Buy Now
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div
        className={`container container-cards pt-5 pb-3 ${
          activeSection === "white" ? "" : "d-none"
        }`}
        id="white-items"
      >
        <div className="row gy-4">
          {WhiteCardsData.map((card, index) => (
            <div
              key={index}
              className="col-lg-2 col-md-3 col-sm-4 col-6 card-container text-center"
              data-aos="fade-up"
              data-aos-delay={index * 100} // Delays each card's animation
            >
              <Card
                hoverable
                className="card-custom"
                cover={<img alt={card.title} src={card.image} />}
              >
                <Meta
                  title={<span className="fw-bold">{card.title}</span>}
                  description={card.description}
                />
                <div className="buy-now-container">
                  <Button type="primary" className="buy-now-button">
                    Buy Now
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <div className="d-inline-flex align-items-center" role="button">
          <h6 className="m-0">See More &nbsp;</h6>
          <i className="bi bi-arrow-right-circle-fill text-primary"></i>
        </div>
      </div>

      <div className="row d-flex align-items-center pb-4 pt-5">
        <div className="col">
          <hr />
        </div>
        <div className="col-auto">
          <h1 className="fw-semibold">Women&apos;s Collection</h1>
        </div>
        <div className="col">
          <hr />
        </div>
      </div>

      <div className="container">
        <div className="row gy-4 pb-3">
          {womenBlackCardsData.map((card, index) => (
            <div
              key={index}
              className="col-lg-2 col-md-3 col-sm-4 col-6 card-container text-center"
              data-aos="fade-up"
              data-aos-delay={index * 100} // Delays each card's animation
            >
              <Card
                hoverable
                className="card-custom"
                cover={<img alt={card.title} src={card.image} />}
              >
                <Meta
                  title={<span className="fw-bold">{card.title}</span>}
                  description={card.description}
                />
                <div className="buy-now-container">
                  <Button type="primary" className="buy-now-button">
                    Buy Now
                  </Button>
                </div>
                <div className="label-top shadow-sm">
                  <span className="text-white">{card.label}</span>``
                </div>
              </Card>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center">
          <div className="d-inline-flex align-items-center" role="button">
            <h6 className="m-0">See More &nbsp;</h6>
            <i className="bi bi-arrow-right-circle-fill text-primary"></i>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

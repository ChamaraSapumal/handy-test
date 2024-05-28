import "./AboutUs.css";
import aboutImg from "../assets/images/aboutUsImg.jpg";
import logo from "../../public/title-icon.png";
import Footer from "./Footer";

export default function AboutUs() {
  return (
    <div>
      <div className="container">
        <div className="row d-flex align-items-center pb-4 pt-5">
          <div className="col">
            <hr />
          </div>
          <div className="col-auto">
            <h1 className=" text-end fw-semibold">About us</h1>
          </div>
        </div>
        <div className="container mt-lg-4">
          <h1 className="fw-medium display-4 pb-3">The perfect design</h1>
          <h6 className="fw-light line-space">
            Introducing Handy Clothing, where our philosophy revolves around
            celebrating individuality through fashion. Established in [year],
            Handy Clothing is a proud subsidiary of Brandix Lanka Limited, a
            distinguished name in the apparel industry with over 50 years of
            expertise in manufacturing and exporting garments globally. At
            Handy, we believe in crafting clothing that resonates with your
            unique persona. Whether you&apos;re working, dancing, or simply
            enjoying life&apos;s moments, our versatile designs are tailored to
            complement your free-spirited nature. Introducing Handy Clothing,
            where our philosophy revolves around
          </h6>{" "}
          <br />
          <h6 className="fw-light line-space d-none d-md-block">
            Introducing Handy Clothing, where our philosophy revolves around
            celebrating individuality through fashion. Established in [year],
            Handy Clothing is a proud subsidiary of Brandix Lanka Limited, a
            distinguished name in the apparel industry with over 50 years of
            expertise in manufacturing and exporting garments globally. At
            Handy, we believe in crafting clothing that resonates with your
            unique persona. Whether you&apos;re working, dancing, or simply
            enjoying life&apos;s moments, our versatile designs are tailored to
            complement your free-spirited nature. Introducing Handy Clothing,
            where our philosophy revolves around celebrating individuality
            through fashion. Established in [year], Handy Clothing is a proud
            subsidiary of Brandix Lanka Li your free-spirited nature.
          </h6>
          <br />
          <h6 className="fw-light line-space d-none d-md-block">
            Introducing Handy Clothing, where our philosophy revolves around
            celebrating individuality through fashion. Established in [year],
            Handy Clothing is a proud subsidiary of Brandix Lanka Limited, a
            distinguished name in the apparel industry with over 50 years of
            expertise in manufacturing and exporting garments globally. At
            Handy, we believe in crafting clothing that resonates with your
            unique persona. Whether you&apos;re working, dancing, or simply
            enjoying life&apos;s moments, our versatile designs are tailored to
            complement your free-spirited nature. Introducing Handy Clothing,
            where our philosophy revolves around celebrating individuality
            through fashion. Established in [year], Handy Clothing is a proud
            subsidiary of Brandix Lanka Li your free-spirited nature.
          </h6>
        </div>
      </div>

      <div className=" c-item pt-5">
        <img src={aboutImg} alt="" className="d-block w-100 c-img" />
      </div>

      <div className="container mt-lg-5">
        <span className="fw-medium display-5 pb-3">
          Uniqueness shines bright,
        </span>
        <br />
        <span className="fw-medium display-5 pb-3"> Beauty in diversity.</span>
        <h6 className="fw-light line-space mt-4">
          Introducing Handy Clothing, where our philosophy revolves around
          celebrating individuality through fashion. Established in [year],
          Handy Clothing is a proud subsidiary of Brandix Lanka Limited, a
          distinguished name in the apparel industry with over 50 years of
          expertise in manufacturing and exporting garments globally. At Handy,
          we believe in crafting clothing that resonates with your unique
          persona. Whether you&apos;re working, dancing, or simply enjoying
          life&apos;s moments, our versatile designs are tailored to complement
          your free-spirite
        </h6>{" "}
        <br />
        <h6 className="fw-light line-space d-none d-md-block">
          Introducing Handy Clothing, where our philosophy revolves around
          celebrating individuality through fashion. Established in [year],
          Handy Clothing is a proud subsidiary of Brandix Lanka Limited, a
          distinguished name in the apparel industry with over 50 years of
          expertise in manufacturing and exporting garments globally. At Handy,
          we believe in crafting clothing that resonates with your unique
          persona. Whether you&apos;re working, dancing, or simply enjoying
          life&apos;s moments, our versatile designs are tailored to complement
          your free-spirited nature. Introducing Handy Clothing, where our
          philosophy revolves around celebrating individuality through fashion.
          Established in [year], Handy Clothing is a proud subsidiary of Brandix
          Lanka Li your free-spirited nature.
        </h6>
      </div>

      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="col-4">
            <h3 className="fw-semibold">Comapany Information</h3>
            <h5>Handy Clothing &#40;PTV&#41; LDT.</h5>
            <h5>Anuradhapura Road, Horowpothana</h5>
            <h5>20986</h5>
          </div>
          <div className="col-4">
            <h3 className="fw-semibold">Customer Care Hotline</h3>
            <h5>(+94) 773469802</h5>
            <a
              href="https://Wa.me/+94773469802"
              target="_blank"
              className="h5 text-dark-emphasis"
            >
              Help & Support with live chat
            </a>
          </div>
          <div className="col-4">
            <img src={logo} className="bi me-2" width="96" height="96"></img>
            <p className="text-body-secondary">&copy; 2024 Devify&reg;</p>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

import logo from "../../public/title-icon.png";

export default function Footer() {
  return (
    <div className="pt-4">
      <div
        className=" d-flex flex-column flex-sm-row justify-content-between border-top pt-3 pb-0 bg-dark"
        data-bs-theme="dark"
      >
        <span className="text-white m-1 mt-0 h3">
          Connect with us <i className="bi bi-arrow-right h3"></i>
        </span>
        <ul className="list-unstyled d-flex ms-auto">
          <li className="ms-3">
            <a
              className="link-body-emphasis"
              href="https://Wa.me/+94773469802"
              target="_blank"
            >
              <i className="bi bi-whatsapp h4"></i>
            </a>
          </li>
          <li className="ms-3">
            <a
              className="link-body-emphasis"
              href="https://web.facebook.com/sandakelum.dasanayaka?mibextid=LQQJ4d&rdid=TPCGISk43RiU4AX7&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2FQapG6XJTYjT6E9Ym%2F%3Fmibextid%3DLQQJ4d%26_rdc%3D1%26_rdr"
              target="_blank"
            >
              <i className="bi bi-facebook h4"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="link-body-emphasis" href="#">
              <i className="bi bi-instagram h4"></i>
            </a>
          </li>
          <li className="ms-3">
            <a
              className="link-body-emphasis"
              href="https://www.tiktok.com/@mr..handy3?_r=1&_d=edeak8higk2i78&sec_uid=MS4wLjABAAAAJGz3CQrDSOSaAjhswz1nTPyHym9G_y9zwu6JVQ7nsmIk2Tn-MMvSEuzWfEg0JZMd&share_author_id=7294508448531039237&sharer_language=en&source=h5_m&u_code=d1ej16bbah281c&ug_btm=b6880,b5836&sec_user_id=MS4wLjABAAAAR0rZf5kBZLfM8n8VGKszjva8YD5MIDcj_Aus1ljOGZCwiEdixCtz96WmOp8milWi&utm_source=copy&social_share_type=5&utm_campaign=client_share&utm_medium=ios&tt_from=copy&user_id=6588516080099147782&enable_checksum=1&share_link_id=38EBA032-250A-4324-BC3F-D5EDEDEBA4E7&share_app_id=1233"
              target="_blank"
            >
              <i className="bi bi-tiktok h4"></i>
            </a>
          </li>
        </ul>
      </div>
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 border-top pt-3">
        <div className="col mb-3">
          <a
            href="/"
            className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
          >
            <img src={logo} className="bi me-2" width="96" height="96"></img>
          </a>
          <p className="text-body-secondary">&copy; 2024 Devify&reg;</p>
        </div>

        <div className="col mb-3"></div>

        <div className="col mb-3 container">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Features
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Pricing
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                FAQs
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                About
              </a>
            </li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Features
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Pricing
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                FAQs
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                About
              </a>
            </li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Features
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Pricing
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                FAQs
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                About
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

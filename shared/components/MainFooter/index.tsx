//https:codepen.io/animationbro/pen/OJQEVEj

import "./style.css";
export default function MainFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li>
                <a href="/about">about us</a>
              </li>
              <li>
                <a href="/services">our services</a>
              </li>
              <li>
                <a href="/contact">Contact us</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>quick links</h4>
            <ul>
              <li>
                <a href="/careers">Careers</a>
              </li>
              <li>
                <a href="/portfolio">Portfolio</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>our Offices</h4>
            <ul>
              <li>
                <a href="#">Lahore</a>
              </li>
              <li>
                <a href="#">Islamabad</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

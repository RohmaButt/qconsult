import "./style.css";

export default function Mission() {
  return (
    <div className="mission">
      <div className="flex flex-row">
        <div className="blank-column"></div>
        <div className="flex flex-col">
          <>
            <h1>
              Help Customers Achieve Their
              <br />
              Business Objectives
            </h1>
            <p>
              By providing innovative, best-in-class consulting, latest IT
              technology <br />
              solutions and services covering the full spectrum of Data
              Analytics and
              <br />
              Data Science domains both on-prem and on-cloud. To
              <br />
              businesses and organizations by providing them 360° big-data
              <br />
              analysis, integration and protection solutions and services.
              <br />
            </p>
          </>
          <>
            <h2>OUR FOUNDATION</h2>
            <div className="dots">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="large-dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <ul className="features-list">
              <li className="single-feature-item">
                <h5>
                  To build an Eco-system of technology consulting and delivery
                  platforms.
                </h5>
              </li>
              <li className="single-feature-item">
                Deliver services to our customer(s) aligned to their business
                needs and objectives as well as ensuring customer success.
              </li>
              <li className="single-feature-item">
                Offer flexible, customer-tailored and cost competitive delivery
                solutions and services to our clients via our global delivery
                centers.
              </li>
              <li className="single-feature-item">
                Build organizational capacity to embrace new technology
                solutions and enable customers to begin their journey towards
                innovative solutions without major upfront cost (CAPEX) for
                business sustainability.
              </li>
            </ul>
          </>
        </div>
      </div>
    </div>
  );
}

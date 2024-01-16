import "./style.css";

export default function () {
  return (
    <div className="flexbox">
      <div className="flexcard flexcardGreen">
        <div className="flex flexcardImg">
          <img className="flexcardimgItem" src="Images/logos/user.svg" alt="" />
        </div>
        <div className="flex flexcardTitle">Consulting & Advisory Services</div>
        <div className="flex flexcardText">
          Allowing for data-dependent business processes and applications to
          deliver more accurate insights.
        </div>
        <div className="flex flexcardImg">
          <a className="flex flexcardImg href" href="/consulting-and-advisory">
            Read More
          </a>
        </div>
      </div>
      <div className="flexcard flexcardGreen">
        <div className="flex flexcardImg">
          <img
            className="flexcardimgItem"
            src="Images/logos/cloud-sun.svg"
            alt=""
          />
        </div>
        <div className="flex flexcardTitle">Data Analytics</div>
        <div className="flex flexcardText">
          Develop smarter, context-sensitive analytics, which incorporates
          external, unstructured and environmental data.
        </div>
        <div className="flex flexcardImg">
          <a className="flex flexcardImg href" href="/data-analytics">
            Read More
          </a>
        </div>
      </div>
      <div className="flexcard flexcardGreen">
        <div className="flex flexcardImg">
          <img className="flexcardimgItem" src="Images/logos/api.svg" alt="" />
        </div>
        <div className="flex flexcardTitle">Managed Services</div>
        <div className="flex flexcardText">
          We take on your production, database and Analytics platform support,
          operations, and lifecycle development responsibility.
        </div>
        <div className="flex flexcardImg">
          <a className="flex flexcardImg href" href="/managed-services">
            Read More
          </a>
        </div>
      </div>
      <div className="flexcard flexcardGreen">
        <div className="flex flexcardImg">
          <img className="flexcardimgItem" src="Images/logos/tire.svg" alt="" />
        </div>
        <div className="flex flexcardTitle">
          Visualizations and Advance Analytics
        </div>
        <div className="flex flexcardText">
          Our consultants have extensive experience in the analytic dashboard
          designing for organizations.
        </div>
        <div className="flex flexcardImg">
          <a className="flex flexcardImg href" href="/advanced-analytics">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

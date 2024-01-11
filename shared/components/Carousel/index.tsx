import "./style.css";
import Image from "next/image";
export default function Carousel() {
  return (
    <div className="">
      <div className="banner1 slide1">
        <img src="https://orgs.gmu.edu/nsa/Mountains.jpg" alt="" />
        <div className="text-box zoom1">
          <h1>Nepal</h1>
        </div>
      </div>
      <div className="banner2 slide2">
        <img
          src="https://images.unsplash.com/photo-1485738422979-f5c462d49f74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNhfGVufDB8fDB8fHww&w=1000&q=80"
          alt=""
        />
        <div className="text-box zoom2">
          <h1>United States</h1>
        </div>
      </div>
      <div className="banner3 slide3">
        <img
          src="https://media.cnn.com/api/v1/images/stellar/prod/230324090551-01-visiting-france-during-protests-what-to-know-top.jpg?c=16x9&q=h_720,w_1280,c_fill"
          alt=""
        />
        <div className="text-box zoom3">
          <h1>France</h1>
        </div>
      </div>
    </div>
  );
}

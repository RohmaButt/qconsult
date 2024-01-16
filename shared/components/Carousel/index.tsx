import "./style.css";
import Image from "next/image";
export default function Carousel() {
  return (
    <>
      <div className="banner1 slide1">
        <img src="/Images/images/img9.jpg" alt="" />
        <div className="text-box zoom1">
          <h1>Nepal</h1>
        </div>
      </div>
      {/* <div className="banner2 slide2">
        <img src="/Images/images/img15.jpg" alt="" />
        <div className="text-box zoom2">
          <h1>United States</h1>
        </div>
      </div> */}
      {/* <div className="banner3 slide3">
        <img src="/Images/images/img16.jpg" alt="" />
        <div className="text-box zoom3">
          <h1>France</h1>
        </div>
      </div> */}
    </>
  );
}

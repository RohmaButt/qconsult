import CardsBox from "../CardsBox";
import Carousel from "../Carousel";
import Consulting from "../Consulting";
import Footer from "../Footer";
import MainWrapper from "../MainWrapper";
import Mission from "../Mission";
import Navbar from "../Navbar";
import ReactCardSlider from "../ReactCardSlider";

const Main = () => {
  return (
    <div className="">
      <section>
        <ReactCardSlider />
      </section>
      <section>
        <CardsBox />
      </section>
      <section>
        <Mission />
      </section>
    </div>
  );
};

export default Main;

import CardsBox from "../CardsBox";
import Carousel from "../Carousel";
import Consulting from "../Consulting";
import Footer from "../Footer";
import MainWrapper from "../MainWrapper";
import Mission from "../Mission";
import Navbar from "../Navbar";

const Main = () => {
  return (
    <div className="d-flex flex-column">
      <section>
        <Carousel />
      </section>
      <section className="container content">
        <CardsBox />
      </section>
      <section>
        <Mission />
      </section>
    </div>
  );
};

export default Main;

import CardsBox from "../CardsBox";
import Carousel from "../Carousel";
import Consulting from "../Consulting";
import Footer from "../Footer";
import MainWrapper from "../MainWrapper";
import Mission from "../Mission";
import Navbar from "../Navbar";

const Main = () => {
  return (
    <>
      <section className="container content">
        {/*   <Carousel />*/}
        <Consulting />
      </section>
      <section className="container content">
        <CardsBox />
      </section>
      <section className="container content">
        <Mission />
      </section>
    </>
  );
};

export default Main;

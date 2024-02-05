import CardsBox from "../CardsBox";
import Consulting from "../ReactCard";
import Footer from "../Footer";
import MainWrapper from "../MainWrapper";
import Mission from "../Mission";
import Navbar from "../Navbar";
import ReactCardSlider from "../ReactCardSlider";

const HomePage = () => {
  return (
    <>
      <section>
        <ReactCardSlider />
      </section>
      <section>
        <CardsBox />
      </section>
      <section>
        <Mission />
      </section>
    </>
  );
};

export default HomePage;

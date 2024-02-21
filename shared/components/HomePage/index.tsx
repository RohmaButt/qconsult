import CardsBox from "../CardsBox";
import Consulting from "../ReactCard";
import Footer from "../Footer";
import MainWrapper from "../MainWrapper";
import Mission from "../Mission";
import Navbar from "../Navbar";
import ReactCardSlider from "../ReactCardSlider";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ReactCardSlider />
      <CardsBox />
      <Mission />
    </div>
  );
};

export default HomePage;

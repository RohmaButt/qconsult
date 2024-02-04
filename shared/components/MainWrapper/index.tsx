import Footer from "../Footer";
import Navbar from "../Navbar";
import "./style.css";

const MainWrapper = (BaseComponent: any) => () =>
  (
    <>
      <Navbar />
      <div className="center-section">
        <BaseComponent />
      </div>
      <Footer />
    </>
  );

export default MainWrapper;

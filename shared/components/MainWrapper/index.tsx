import Footer from "../Footer";
import Navbar from "../Navbar";
import "./style.css";

const MainWrapper = (BaseComponent: any) => () =>
  (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="center-section">
        <BaseComponent />
      </div>
      <Footer />
    </div>
  );

export default MainWrapper;

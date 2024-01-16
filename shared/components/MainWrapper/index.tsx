import Footer from "../Footer";
import Navbar from "../Navbar";

const MainWrapper = (BaseComponent: any) => () =>
  (
    <>
      <Navbar />
      <BaseComponent />
      <Footer />
    </>
  );

export default MainWrapper;

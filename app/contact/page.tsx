import Breadcrums from "@/shared/components/Breadcrums";
import CardsBox from "@/shared/components/CardsBox";
import MainWrapper from "@/shared/components/MainWrapper";
import "./style.css";

const Contact = () => {
  return (
    <>
      <section className="contact-container">
        <Breadcrums
          title="Contact Us"
          image="/Images/images/contact.jpg"
          description0="How can we"
          description1="  help"
          description2=" you?"
          blue_color0={false}
          blue_color1={true}
          blue_color2={false}
        />
      </section>
      <section>
        <CardsBox />
      </section>
      {/* <section>
        <Mission />
      </section> */}
    </>
  );
};

export default MainWrapper(Contact);

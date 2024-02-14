import Breadcrums from "@/shared/components/Breadcrums";
import MainWrapper from "@/shared/components/MainWrapper";
import ContactCardsBox from "@/shared/components/ContactCardsBox";
import { SignUp } from "@/shared/components/SignUp";
import CardsBox from "@/shared/components/CardsBox";
// import "./style.css";

const Contact = () => {
  return (
    <>
      <section>
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
        <ContactCardsBox />
      </section>
      {/* <section className="parent-container contact-central-container">
        <p>Q</p>
        <div className="form-container">
          <SignUp />
        </div>
      </section> */}
    </>
  );
};

export default MainWrapper(Contact);

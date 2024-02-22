import Breadcrums from "@/shared/components/Breadcrums";
import MainWrapper from "@/shared/components/MainWrapper";
import ContactSection from "@/shared/components/ContactSection";

const Contact = () => {
  return (
    <div className="flex flex-col mt-64">
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
      <section className="why-us">
        <h1>Interested in working with us? Email us and we’ll get in touch.</h1>
      </section>
      <section className="why-us">
        <h2>Contact information</h2>
      </section>
      <ContactSection />
    </div>
  );
};

export default MainWrapper(Contact);

import Breadcrums from "@/shared/components/Breadcrums";
import CardsBox from "@/shared/components/CardsBox";
import MainWrapper from "@/shared/components/MainWrapper";

const About = () => {
  return (
    <>
      <section>
        <Breadcrums
          title="About Us"
          image="/Images/images/about.jpg"
          description0="With our smart insights and "
          description1="cloud-based solutions, "
          description2="we empower organizations to make data-driven decisions and harness the power of the cloud for transformative outcomes"
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

export default MainWrapper(About);

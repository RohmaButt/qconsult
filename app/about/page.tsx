import Breadcrums from "@/shared/components/Breadcrums";
import CoreValuesBox from "@/shared/components/CoreValuesBox";
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
      <section className="core-values">
        <h1>Core Values</h1>
      </section>
      <section>
        <CoreValuesBox />
      </section>
    </>
  );
};

export default MainWrapper(About);

import Breadcrums from "@/shared/components/Breadcrums";
import CardsBox from "@/shared/components/CardsBox";
import MainWrapper from "@/shared/components/MainWrapper";

const Careers = () => {
  return (
    <>
      <section>
        <Breadcrums
          title="Careers at Qonsult"
          image="/Images/images/careers.webp"
          description0="At Qonsult, we emphasize on "
          description1="employee well-being, motivation, and growth, "
          description2="while providing our team with the support needed to discover their full potential and excel"
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

export default MainWrapper(Careers);

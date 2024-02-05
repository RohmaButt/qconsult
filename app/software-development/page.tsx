import Breadcrums from "@/shared/components/Breadcrums";
import CardsBox from "@/shared/components/CardsBox";
import MainWrapper from "@/shared/components/MainWrapper";

const SoftwareDevelopment = () => {
  return (
    <>
      <section>
        <Breadcrums
          title="Software Development"
          image="/Images/images/software-dev.webp"
          description0="Transforming "
          description1="possibilities "
          description2="into reality"
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

export default MainWrapper(SoftwareDevelopment);

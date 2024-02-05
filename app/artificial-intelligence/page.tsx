import Breadcrums from "@/shared/components/Breadcrums";
import CardsBox from "@/shared/components/CardsBox";
import MainWrapper from "@/shared/components/MainWrapper";

const ArtificialIntelligence = () => {
  return (
    <>
      <section>
        <Breadcrums
          title="Artificial Intelligence"
          image="/Images/images/ai.jpg"
          description0="Over "
          description1="50% "
          description2=" of companies use AI for cost-saving"
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

export default MainWrapper(ArtificialIntelligence);

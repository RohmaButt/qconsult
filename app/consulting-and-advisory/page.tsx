import Breadcrums from "@/shared/components/Breadcrums";
import CardsBox from "@/shared/components/CardsBox";
import MainWrapper from "@/shared/components/MainWrapper";
import Mission from "@/shared/components/Mission";

const ConsultingAndAdvisory = () => {
  return (
    <>
      <section>
        <Breadcrums
          title="Consultancy & Advisory"
          description0="Tech-driven "
          description1="decision making"
        />
      </section>
      {/* <section>
        <CardsBox />
      </section>
      <section>
        <Mission />
      </section> */}
    </>
  );
};

export default MainWrapper(ConsultingAndAdvisory);

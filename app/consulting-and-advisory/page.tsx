import Breadcrums from "@/shared/components/Breadcrums";
import CardsBox from "@/shared/components/CardsBox";
import MainWrapper from "@/shared/components/MainWrapper";
import Mission from "@/shared/components/Mission";
import { faL } from "@fortawesome/free-solid-svg-icons";

const ConsultingAndAdvisory = () => {
  return (
    <>
      <section>
        <Breadcrums
          title="Consultancy & Advisory"
          image="/Images/images/img17.jpg"
          description0="Tech-driven "
          description1="decision making"
          blue_color0={true}
          blue_color1={false}
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

export default MainWrapper(ConsultingAndAdvisory);

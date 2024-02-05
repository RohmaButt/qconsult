import MainWrapper from "@/shared/components/MainWrapper";
import Breadcrums from "@/shared/components/Breadcrums";
import CardsBox from "@/shared/components/CardsBox";
import "./style.css";

const DevOps = () => {
  return (
    <>
      <section>
        <Breadcrums
          title="Cloud DevOps"
          image="/Images/images/cloud-2.jpg"
          description0="Unlocking the "
          description1=" power of cloud "
          description2=""
          blue_color0={false}
          blue_color1={true}
          blue_color2={true}
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

export default MainWrapper(DevOps);

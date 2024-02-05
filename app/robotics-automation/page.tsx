import Breadcrums from "@/shared/components/Breadcrums";
import CardsBox from "@/shared/components/CardsBox";
import MainWrapper from "@/shared/components/MainWrapper";

const RoboticsAutomation = () => {
  return (
    <>
      <section>
        <Breadcrums
          title="Robotic Process Automation"
          image="/Images/images/robotics.jpg"
          description0="Streamlining workflows "
          description1=" efficiently"
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

export default MainWrapper(RoboticsAutomation);

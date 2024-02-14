import Breadcrums from "@/shared/components/Breadcrums";
import StaticCardsBox from "@/shared/components/StaticCardsBox";
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
        <StaticCardsBox />
      </section>
    </>
  );
};

export default MainWrapper(RoboticsAutomation);

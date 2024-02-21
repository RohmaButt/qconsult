import Breadcrums from "@/shared/components/Breadcrums";
import MainWrapper from "@/shared/components/MainWrapper";
import RoboticsAutomationSection from "@/shared/components/RoboticsAutomationSection";

const RoboticsAutomation = () => {
  return (
    <div className="flex flex-col mt-64">
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
      <section className="why-us">
        <h1>
          Building robotic processes to automate routine activities such as
          customer onboarding, KYC, order processing, and more.
        </h1>
      </section>
      <section className="why-us">
        <h2>Why us?</h2>
      </section>
      <RoboticsAutomationSection />
    </div>
  );
};

export default MainWrapper(RoboticsAutomation);

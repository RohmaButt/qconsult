import Breadcrums from "@/shared/components/Breadcrums";
import MainWrapper from "@/shared/components/MainWrapper";
import SoftwareDevelopmentSection from "@/shared/components/SoftwareDevelopmentSection";

const SoftwareDevelopment = () => {
  return (
    <div className="flex flex-col mt-64">
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
      <section className="why-us">
        <h1>
          We develop customized web and mobile applications to fuel business
          growth within a budget
        </h1>
      </section>
      <section className="why-us">
        <h2>Why Us?</h2>
      </section>
      <SoftwareDevelopmentSection />
    </div>
  );
};

export default MainWrapper(SoftwareDevelopment);

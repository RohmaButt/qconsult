import MainWrapper from "@/shared/components/MainWrapper";
import Breadcrums from "@/shared/components/Breadcrums";
import DevOpsSection from "@/shared/components/DevOpsSection";

const DevOps = () => {
  return (
    <div className="flex flex-col mt-64">
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
      <section className="why-us">
        <h1>
          We design state-of-the-art cloud environments to enable best SDLC
          practices, increase agility, and streamline workflows.
        </h1>
      </section>
      <section className="why-us">
        <h2 style={{ backgroundColor: "#f5f5f5" }}>Benefits</h2>
      </section>
      <DevOpsSection />
    </div>
  );
};

export default MainWrapper(DevOps);

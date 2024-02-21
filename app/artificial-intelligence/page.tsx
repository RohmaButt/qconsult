import Breadcrums from "@/shared/components/Breadcrums";
import ArtificialIntelligenceSection from "@/shared/components/ArtificialIntelligenceSection";
import MainWrapper from "@/shared/components/MainWrapper";

const ArtificialIntelligence = () => {
  return (
    <div className="flex flex-col mt-64">
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
      <section className="why-us">
        <h1>
          We use artificial intelligence to power new product features, generate
          actionable intelligence, and automate processes.
        </h1>
      </section>
      <section className="why-us">
        <h2 style={{ backgroundColor: "#F6F4F4" }}>Why Us?</h2>
      </section>
      <ArtificialIntelligenceSection />
    </div>
  );
};

export default MainWrapper(ArtificialIntelligence);

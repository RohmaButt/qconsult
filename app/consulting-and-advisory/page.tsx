import Breadcrums from "@/shared/components/Breadcrums";
import ConsultingAndAdvisorySection from "@/shared/components/ConsultingAndAdvisorySection";
import MainWrapper from "@/shared/components/MainWrapper";

const ConsultingAndAdvisory = () => {
  return (
    <div className="flex flex-col mt-64">
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
      <section className="why-us">
        <h1>
          We help organizations identify, prioritize, and plan for growth
          opportunities through AI and other technologies.
        </h1>
      </section>
      <section className="why-us">
        <h2 style={{ backgroundColor: "#F6F4F4" }}>Why Us?</h2>
      </section>
      <ConsultingAndAdvisorySection />
    </div>
  );
};

export default MainWrapper(ConsultingAndAdvisory);

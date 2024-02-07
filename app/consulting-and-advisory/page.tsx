import Breadcrums from "@/shared/components/Breadcrums";
import CentralPane from "@/shared/components/CentralPane";
import MainWrapper from "@/shared/components/MainWrapper";

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
        <CentralPane />
      </section>
      {/* <section>
        <Mission />
      </section> */}
    </>
  );
};

export default MainWrapper(ConsultingAndAdvisory);

import Breadcrums from "@/shared/components/Breadcrums";
import CardsBox from "@/shared/components/CardsBox";
import MainWrapper from "@/shared/components/MainWrapper";

const DataAnalytics = () => {
  return (
    <>
      <section>
        <Breadcrums
          title="Data Analytics"
          image="/Images/images/data-analysis.jpg"
          description0="Analyzing "
          description1="raw data "
          description2="to discover insights"
          blue_color0={false}
          blue_color1={true}
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
export default MainWrapper(DataAnalytics);

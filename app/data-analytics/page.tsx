import Breadcrums from "@/shared/components/Breadcrums";
import DataAnalyticsSection from "@/shared/components/DataAnalyticsSection";
import MainWrapper from "@/shared/components/MainWrapper";

const DataAnalytics = () => {
  return (
    <div className="flex flex-col mt-64">
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
      <section className="why-us">
        <h1>
          We establish a data-driven culture by democratizing data assets,
          leading to insights generation and improved decision making.
        </h1>
      </section>
      <section className="why-us">
        <h2>Why Us?</h2>
      </section>
      <DataAnalyticsSection />
    </div>
  );
};
export default MainWrapper(DataAnalytics);

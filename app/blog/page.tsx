import Breadcrums from "@/shared/components/Breadcrums";
import CardsBox from "@/shared/components/CardsBox";
import MainWrapper from "@/shared/components/MainWrapper";

const Blog = () => {
  return (
    <>
      <section>
        <Breadcrums
          title="Blog"
          image="/Images/images/blog.jpg"
          description0="Dive straight into what is driving today’s solutions and how we are shaping tomorrow’s landscape. From"
          description1="  Data Analytics to Machine Learning to AI,"
          description2=" we aim to provide a platform that promotes education and enables professionals to learn and grow"
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

export default MainWrapper(Blog);

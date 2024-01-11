import CardsBox from "../CardsBox";
import Consulting from "../Consulting";
import Mission from "../Mission";

export default function Main() {
  return (
    <>
      {/* <Carousel /> */}
      <Consulting />
      <section className="container content">
        <CardsBox />
      </section>
      <section className="container content">
        <Mission />
      </section>
    </>
  );
}

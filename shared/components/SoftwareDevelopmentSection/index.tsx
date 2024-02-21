import { ContentCard } from "../ContentCard";
import { StaticCard } from "../StaticCard";

export default function () {
  const styles = { backgroundColor: "#f5f5f5" };

  return (
    <div className="flexbox-images-card" style={styles}>
      <StaticCard
        flexcardTitle="Customized Solutions"
        flexcardText="Work closely with businesses to create tailor-made solutions that align with objectives, requirements, and specific needs."
        styles={styles}
        flexcardImg="/Images/icons/engineer.png"
      />
      <StaticCard
        flexcardTitle="Cost Efficiency"
        flexcardText="Complete projects timely and efficiently through our experience and streamlined processes."
        styles={styles}
        flexcardImg="/Images/icons/control-panel.png"
      />
      <StaticCard
        flexcardTitle="Quality Assurance"
        flexcardText="Conduct thorough testing to ensure that the software meets the highest standards of quality, reliability, and security."
        styles={styles}
        flexcardImg="/Images/icons/coding.png"
      />
    </div>
  );
}

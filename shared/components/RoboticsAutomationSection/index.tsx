import { StaticCard } from "../StaticCard";

export default function () {
  const styles = { backgroundColor: "#f5f5f5" };

  return (
    <div className="flexbox-images-card" style={styles}>
      <StaticCard
        flexcardTitle="Increase Productivity"
        flexcardText="Automate repetitive and rule-based tasks, freeing up human resources to work on strategic initiatives."
        styles={styles}
        flexcardImg="/Images/icons/robo-1.png"
      />
      <StaticCard
        flexcardTitle="Error Reduction"
        flexcardText="Reduce human error leading to improved data quality and minimized re-work."
        styles={styles}
        flexcardImg="/Images/icons/robo-2.png"
      />
      <StaticCard
        flexcardTitle="Compliance"
        flexcardText="Ensure adherence to predefined regulatory requirements redicing the risk of non-compliance and other penalties."
        styles={styles}
        flexcardImg="/Images/icons/robo-3.png"
      />
    </div>
  );
}

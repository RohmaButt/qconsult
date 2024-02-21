import { faL } from "@fortawesome/free-solid-svg-icons";
import { StaticCard } from "../StaticCard";
import "./style.css";

export default function () {
  const styles = { backgroundColor: "#f5f5f5" };

  return (
    // <div className="flex flex-col min-h-screen">
    <div className="static-cardsbox">
      <h2>
        Building robotic processes to automate routine activities such as
        customer onboarding, KYC, order processing, and more.
      </h2>
      <h3>Why us?</h3>
      <div className="mt-4 mb-4 static-flexbox" style={styles}>
        <StaticCard
          flexcardTitle="Increase Productivity"
          flexcardText="Automate repetitive and rule-based tasks, freeing up human resources to work on strategic initiatives."
          styles={styles}
          flexcardImg="/Images/icons/speedometer.png"
        />
        <StaticCard
          flexcardTitle="Increase Productivity"
          flexcardText="Reduce human error leading to improved data quality and minimized re-work."
          styles={styles}
          flexcardImg="/Images/icons/warning-sign.png"
        />
        <StaticCard
          flexcardTitle="Compliance"
          flexcardText="Ensure adherence to predefined regulatory requirements redicing the risk of non-compliance and other penalties."
          styles={styles}
          flexcardImg="/Images/icons/speed-test.png"
        />
      </div>
      <p>Values</p>
      <div className="mt-4 mb-4 static-flexbox">
        <StaticCard
          flexcardTitle="Cloud DevOps"
          flexcardText="Designing state-of-the-art infrastructure to enable best SDLC practices, increase agility, and streamline workflows"
          styles={styles}
        />
        <StaticCard
          flexcardTitle="Software Development"
          flexcardText=" Development of customized web and mobile solutions to automate business workflows, onboard new users, and manage millions of transactions"
          styles={styles}
        />
        <StaticCard
          flexcardTitle="Robotics Process Automation"
          flexcardText="Building robotic processes to automate routine activities such as customer onboarding, KYC, order processing and more."
          styles={styles}
        />
      </div>
    </div>
  );
}

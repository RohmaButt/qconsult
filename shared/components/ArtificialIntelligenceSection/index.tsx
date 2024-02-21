import { StaticCard } from "../StaticCard";

export default function () {
  const styles = { backgroundColor: "#f5f5f5" };

  return (
    <div className="flexbox-images-card">
      <StaticCard
        flexcardTitle="Automate processes"
        flexcardText="Automate AI-powered processes to optimize your business processes, improve efficiency and reduce costs."
        styles={styles}
        flexcardImg="/Images/icons/crystal-ball-2.png"
      />
      <StaticCard
        flexcardTitle="Predictive analytics"
        flexcardText="Apply AI algorithms to analyze data and make predictive assessments on future trends to boost your businesses performance."
        styles={styles}
        flexcardImg="/Images/icons/idea-1.png"
      />
      <StaticCard
        flexcardTitle="Customer experience"
        flexcardText="Utilize AI technologies to improve the user experience, cultivating customer loyalty."
        styles={styles}
        flexcardImg="/Images/icons/opportunity-2.png"
      />
    </div>
  );
}

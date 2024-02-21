import { StaticCard } from "../StaticCard";

export default function () {
  const styles = { backgroundColor: "#f5f5f5" };

  return (
    <div className="flexbox-images-card">
      <StaticCard
        flexcardTitle="Adaptability"
        flexcardText="Handle traffic spikes while ensuring optimal performance and cost efficiency."
        styles={styles}
        flexcardImg="/Images/icons/devops-1.png"
      />
      <StaticCard
        flexcardTitle="Agility"
        flexcardText="Enable faster and more flexible software development, testing, and deployment processes to promptly meet requirements."
        styles={styles}
        flexcardImg="/Images/icons/devops-2.png"
      />
      <StaticCard
        flexcardTitle="Reliability"
        flexcardText="Reduce downtime and improve the user experience by automating processes to quickly resolve issues."
        styles={styles}
        flexcardImg="/Images/icons/devops-3.png"
      />
    </div>
  );
}

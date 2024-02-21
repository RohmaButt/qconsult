import { StaticCard } from "../StaticCard";

export default function () {
  const styles = { backgroundColor: "#f5f5f5" };

  return (
    <div className="flexbox-images-card" style={styles}>
      <StaticCard
        flexcardTitle="Identify Growth Opportunities"
        flexcardText="Understand data to identify untapped niches and business opportunities to expand into lucrative areas of growth."
        flexcardImg="/Images/icons/search-engine.png"
      />
      <StaticCard
        flexcardTitle="Data-driven Decisions"
        flexcardText="Analyze data for businesses to make strategic decisions based on facts rather than guesswork, contributing to their growth."
        flexcardImg="/Images/icons/calculator.png"
      />
      <StaticCard
        flexcardTitle="Trends & Behavior"
        flexcardText="Discover patterns and trends in customer behavior, market dynamics, and industry to meet evolving demands and stay ahead of competition."
        flexcardImg="/Images/icons/business.png"
      />
    </div>
  );
}

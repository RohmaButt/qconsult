import { StaticCard } from "../StaticCard";

export default function () {
  return (
    <div className="flexbox-images-card">
      <StaticCard
        flexcardTitle="Technology Review"
        flexcardText="We identify areas where you can streamline processes, optimize resources, and boost overall efficiency to scale your business effectively."
        flexcardImg="/Images/icons/technologyreview.jpg"
      />
      <StaticCard
        flexcardTitle="Industry Insights"
        flexcardText="Offer valuable insights, trends and strategies tailored to your targets."
        flexcardImg="/Images/icons/Business-Review-1-1.jpg"
      />
      <StaticCard
        flexcardTitle="Risk Mitigation"
        flexcardText="Guidance on regulatory compliance, intellectual property protection, cybersecurity measures, and other safeguards to help mitigate potential risks."
        flexcardImg="/Images/icons/data-review.jpg"
      />
    </div>
  );
}

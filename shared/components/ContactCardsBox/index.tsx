import { ContactCard } from "../ContactCard";

export default function () {
  return (
    <>
      <div className="flexbox">
        <ContactCard
          contactCardTitle="Sales"
          contactCardImg="/Images/icons/career.png"
          contactCardEmail="sales@qonsult.ai"
        />
        <ContactCard
          contactCardTitle="General Queries"
          contactCardImg="/Images/icons/question-3.png"
          contactCardEmail="info@qonsult.ai"
        />
        <ContactCard
          contactCardTitle="Careers"
          contactCardImg="/Images/icons/people-8.png"
          contactCardEmail="careers@qonsult.ai"
        />
      </div>
    </>
  );
}

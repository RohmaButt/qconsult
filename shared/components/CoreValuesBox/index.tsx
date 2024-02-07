import { ContentCard } from "../ContentCard";

export default function () {
  return (
    <>
      <div className="flexbox">
        <ContentCard
          flexcardTitle="Ethical"
          flexcardText="In the realm of AI and security, we uphold a steadfast commitment to ethical practices, ensuring privacy, transparency, and responsible innovation for our customers."
        />
        <ContentCard
          flexcardTitle="Purposeful"
          flexcardText="We prioritize societal, environmental, and stakeholder impact, aligning our actions with a higher mission of sustainability, social responsibility, and community contribution."
        />
      </div>
      <div className="flexbox">
        <ContentCard
          flexcardTitle="Innovative"
          flexcardText="We don’t believe in labelling ideas as ‘failures’ and ‘successes.’ Instead, we transform every idea it into something unique, lucrative, and ultimately profitable."
        />
        <ContentCard
          flexcardTitle="Accountable"
          flexcardText="We take full responsibility, and ownership for everything that leaves our company, ensuring reliability and liability."
        />
      </div>
    </>
  );
}

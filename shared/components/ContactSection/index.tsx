import { StaticCard } from "../StaticCard";

export default function () {
  const styles = { backgroundColor: "#f5f5f5" };

  return (
    <div className="flexbox-images-card">
      <StaticCard
        flexcardTitle="General Queries"
        flexcardText="info@qonsult.ai"
        styles={styles}
        flexIsImageURL={true}
        flexcardImg="/Images/icons/contact-1.png"
      />
      <StaticCard
        flexcardTitle="Careers"
        flexcardText="careers@qonsult.ai"
        styles={styles}
        flexIsImageURL={true}
        flexcardImg="/Images/icons/contact-2.png"
      />
      <StaticCard
        flexcardTitle="Sales"
        flexcardText="sales@qonsult.ai"
        styles={styles}
        flexIsImageURL={true}
        flexcardImg="/Images/icons/contact-3.png"
      />
    </div>
  );
}

//   return (
//     <>
//       <div className="flexbox">
//         <ContactCard
//           contactCardTitle="Sales"
//           contactCardImg="/Images/icons/career.png"
//           contactCardEmail="sales@qonsult.ai"
//         />
//         <ContactCard
//           contactCardTitle="General Queries"
//           contactCardImg="/Images/icons/question-3.png"
//           contactCardEmail="info@qonsult.ai"
//         />
//         <ContactCard
//           contactCardTitle="Careers"
//           contactCardImg="/Images/icons/people-8.png"
//           contactCardEmail="careers@qonsult.ai"
//         />
//       </div>
//     </>
//   );
// }

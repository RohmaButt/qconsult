import { Card } from "../Card";

export default function () {
  return (
    <>
      <div className="flexbox">
        <Card
          flexcardTitle="Consulting & Advisory"
          flexcardText="Allowing for data-dependent business processes and applications to
          deliver more accurate insights."
          flexcardImgHref="/consulting-and-advisory"
        />
        <Card
          flexcardTitle="Data Analytics"
          flexcardText="Develop smarter, context-sensitive analytics, which incorporates
          external, unstructured and environmental data."
          flexcardImgHref="/data-analytics"
        />
        <Card
          flexcardTitle="Managed Services"
          flexcardText="We take on your production, database and Analytics platform support,
          operations, and lifecycle development responsibility."
          flexcardImgHref="/managed-services"
        />
      </div>
      <div className="flexbox">
        <Card
          flexcardTitle="Software Development"
          flexcardText=" Development of customized web and mobile solutions to automate business workflows, onboard new users, and manage millions of transactions"
          flexcardImgHref="/software-development"
        />
        <Card
          flexcardTitle="Artificial Intelligence"
          flexcardText="using Artificial Intelligence to power new product features, generate actionable intelligence with automated processes"
          flexcardImgHref="/artificial-intelligence"
        />
        <Card
          flexcardTitle="Cloud DevOps"
          flexcardText="Designing state-of-the-art infrastructure to enable best SDLC practices, increase agility, and streamline workflows"
          flexcardImgHref="/cloud-devOps"
        />
      </div>
    </>
  );
}

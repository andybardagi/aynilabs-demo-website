import React from "react";
import { TeamMemberCard, TeamMemberCardProps } from "./TeamMemberCard";
import styles from "./team.module.css";

const TeamMembers: TeamMemberCardProps[] = [
  {
    name: "Ignacio Alessio",
    role: "Principal Engineer",
    linkedInURL: "https://www.linkedin.com/in/nachaos/",
    imgURL:
      "https://media.licdn.com/dms/image/C4D03AQECLBWXXXyoeQ/profile-displayphoto-shrink_800_800/0/1516516606769?e=1689811200&v=beta&t=6gM_O1EE_HcdsIpuXhU-O94tzxHkhr2igtlpHPhxlCg",
  },
  {
    name: "Matias Carranza",
    role: "Principal Engineer",
    linkedInURL: "https://www.linkedin.com/in/matiascarranza/",
    imgURL:
      "https://media.licdn.com/dms/image/C4D03AQGKE_F3Zj415A/profile-displayphoto-shrink_800_800/0/1517015411523?e=1689811200&v=beta&t=ZcfJQw6SI3pjKQOqTOkdzeONYvNbm1w4yDno5EMAm6g",
  },
  {
    name: "Dan Hirsch",
    role: "CEO / CTO",
    linkedInURL: "https://www.linkedin.com/in/dfhirsch/",
    imgURL:
      "https://media.licdn.com/dms/image/C4E03AQGqNzDFF792aA/profile-displayphoto-shrink_800_800/0/1560619036855?e=1689811200&v=beta&t=BoaEbAmPIFKWV-dSQkDtO1a_nMFkgp9Vg8m_BGZHtYM",
  },
];

export function Team() {
  return (
    <div className={`bg-sky-950 ${styles.team} w-full m-auto py-12`}>
      <div className="max-w-7xl w-full text-lg flex flex-col gap-12 mx-auto px-4 xl:px-0">
        <div>
          <h4 className="font-bold text-3xl mb-2">Our Team</h4>
          <p>
            At Ayni Labs, we take communication and collaboration seriously, and
            we know that they are essential ingredients for success. Our team
            members are excellent communicators, with experience on
            geographically distributed organizations, and remote work. We
            understand that building a software product can be complex, and
            that&apos;s why we&apos;re committed to providing you with the
            support you need every step of the way.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 mt-4 gap-4">
            {TeamMembers.map((member, i) => (
              <div key={i} className="mx-auto">
                <TeamMemberCard {...member} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-bold text-3xl mb-2">Support Network</h4>
          <p>
            We take pride in our flexible and scalable team, which can easily
            adapt and expand to incorporate the necessary skills and seniority
            required for your project&apos;s success. Additionally, we have a
            vast network of trusted collaborators and partners that we can
            leverage to ensure that all your needs are met.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-3xl mb-2">Previous Experience</h4>
          <p>
            With a successful track record of building teams, organizations, and
            products for a variety of companies including startups, scaleups,
            unicorns, and corporations, we&apos;re confident in our ability to
            work with you to ensure that your vision is fully realized.
          </p>
        </div>
      </div>
    </div>
  );
}

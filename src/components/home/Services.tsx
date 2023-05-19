import React from "react";
import { MdDesignServices, MdOutlineExplore } from "react-icons/md";
import { FaCode, FaInfinity } from "react-icons/fa";
import { RiTestTubeFill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { Card, CardProps } from "../layout/Card";

const CardsContent: CardProps[] = [
  {
    title: "Discovery",
    description:
      "We collectively explore the problem space, gather insights and identify potential solutions before committing to a specific path forward.",
    icon: <MdOutlineExplore />,
  },
  {
    title: "Design",
    description:
      "We collaboratively create and refine the visual and functional aspects of the product or solution based on our discovery insights, with the aim of delivering a user-centered and aesthetically pleasing experience.",
    icon: <MdDesignServices />,
  },
  {
    title: "Development",
    description:
      "We collaboratively build and refine the product or solution using various tools, technologies, and processes, based on our design and discovery phases, with the aim of delivering a high-quality solution that meets customer needs.",
    icon: <FaCode />,
  },
  {
    title: "QA Automation",
    description:
      "We work together to design, develop, and implement automated tests that ensure the quality and functionality of the product or solution, improving efficiency and reducing the likelihood of human error.",
    icon: <RiTestTubeFill />,
  },
  {
    title: "Delivery",
    description:
      "We work together to finalize and deploy the product or solution to our intended audience, ensuring it meets quality standards, regulatory requirements, and is ready for use.",
    icon: <TbTruckDelivery />,
  },
  {
    title: "DevOps",
    description:
      "We take a collaborative approach to integrate software development and IT operations, ensuring that the product or solution is developed, deployed and maintained in a seamless and efficient manner, with a focus on automation, communication, and continuous delivery.",
    icon: <FaInfinity />,
  },
];

export function Services() {
  return (
    <div>
      <h4 className="font-bold text-3xl mb-4">Our services</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {CardsContent.map((card, i) => (
          <div key={i} className="row-span-1 col-span-1 h-full w-full">
            <Card {...card} />
          </div>
        ))}
      </div>
    </div>
  );
}

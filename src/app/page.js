import React from "react";
import { Suspense } from "react";
import { ThemeProvider } from "./ThemeProvider";
import PortfolioContent from "./PortfolioContent";
import pawnec1 from "./assets/pawnec/pawnec1.png";
import pawnec2 from "./assets/pawnec/pawnec2.png";
import pawnec3 from "./assets/pawnec/pawnec3.png";
import roomie1 from "./assets/roomie/heyroomie1.png";
import roomie2 from "./assets/roomie/heyroomie2.png";
import roomie3 from "./assets/roomie/heyroomie3.jpg";
import roomie4 from "./assets/roomie/roomie4.jpg";
import ukuu1 from "./assets/ukuu/ukuu1.png";
import ukuu2 from "./assets/ukuu/ukuu2.png";

const portfolioData = {
  about:
    "Alfredo S. Dela Peña III - TypeScript wizard crafting pixel-perfect React apps - I am a dedicated Full Stack Software Engineer with expertise in TypeScript, JavaScript, and React. I thrive on solving complex problems and delivering high-quality, maintainable code.",
  experience: [
    {
      title: "Full Stack Software Engineer",
      company: "Proudcloud",
      date: "August 2022 - Present",
      description:
        "full stack agile software engineering teams for startups, scaleups, and tech-enabled ventures.",
    },
    {
      title: "Frontend Engineer",
      company: "Digispark Tech Corp",
      date: "February 2020 - June 2020",
      description: "Solutions Provider",
    },
  ],
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "React Native",
    "Node.js",
    "Express",
    "GraphQL",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Tailwind",
    "Next.js",
    "Vue",
    "Ruby",
    "Elixir",
  ],
  projects: [
    {
      name: "Pawnec",
      description:
        "Wearable pet passport, 'Born out of love and fashioned into tech, Pawnec stems from our humble beginnings as a pet accessories company. We've spun wearable tokens of love into smart safeguards, all the while maintaining the heart of pet parenting at our core.'",
      details:
        "• Optimized backend queries, resulting in a 50% decrease in infrastructure costs.\n• Migrated database from MySQL to Amazon DynamoDB, improving scalability and reducing latency.\n• Developed pixel-perfect user interfaces from design mockups.",
      url: "https://us.pawnec.com/",
      screenshots: [pawnec1, pawnec2, pawnec3],
    },
    {
      name: "Hey Roomie",
      description:
        "Your exclusive Virtual HQ! Hey Roomie gives you your own virtual hangout equipped with digital tools to empower & supercharge the growth of your community.",
      details:
        "• Designed and implemented a real-time chat feature using PubNub's API.\n• Optimized application performance, reducing loading times and improving efficiency.\n• Developed features for influencers, including thumbnail uploads and event attendee management.",
      url: "https://heyroomie.vip/",
      screenshots: [roomie1, roomie2, roomie3, roomie4],
    },
    {
      name: "Ukuu",
      description: "Lend or rent your personal items, 'The airbnb for things'",
      details:
        "• Developed the user interface for the desktop view, ensuring a clean, intuitive, and visually appealing design.\n• Implemented a comprehensive user dashboard for transaction management.\n• Redesigned the mobile view to optimize the user experience on smaller screens.",
      url: "https://beta.ukuu.io",
      screenshots: [ukuu1, ukuu2],
    },
  ],
};

export default function Home() {
  return (
    <ThemeProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <PortfolioContent portfolioData={portfolioData} />
      </Suspense>
    </ThemeProvider>
  );
}

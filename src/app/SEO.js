import React from "react";
import Head from "next/head";

const SEO = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Alfredo S. Dela Peña III",
    jobTitle: "Full Stack Software Engineer",
    url: "https://alfredoportfolio.vercel.app",
    sameAs: [
      "https://github.com/alfredosdpiii",
      "https://www.linkedin.com/in/asdpiii/",
    ],
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "Express",
      "GraphQL",
      "MongoDB",
      "PostgreSQL",
      "AWS",
    ],
  };

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="Alfredo S. Dela Peña III" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://your-portfolio-url.com" />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Head>
  );
};

export default SEO;

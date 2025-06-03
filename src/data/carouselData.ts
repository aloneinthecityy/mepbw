import type { CarouselItemType } from "../components/types/carousel";

export const carouselData: CarouselItemType[] = [
  {
    image:
      "./public/projects/metadados.png",
    title: "Metadados Website",
    date: "2025",
    description:
      "I developed the new corporate website for Metadados with a focus on performance, SEO, and accessibility, using a modern stack composed of Astro, React, TypeScript, Tailwind CSS, Strapi CMS, and PostgreSQL. The architecture was based on static site generation with partial hydration, resulting in a +40 point increase on Google PageSpeed and perfect scores in SEO (100/100) and accessibility criteria. I implemented integrations with REST APIs and worked on continuous user experience monitoring using tools such as Google Search Console, Microsoft Clarity, and HubSpot. I also contributed to DevOps processes, utilizing Docker and Azure DevOps for deployments and infrastructure adjustments.",
    link: "https://www.metadados.com.br/",
  },
  {
    image:"./public/projects/astaVsTheDemons.png",
    title: "Asta Asta vs The Demons - Web platform and Visual Novel",
    date: "2022",
    description: "In 2019, around 1 billion people worldwide had some form of psychological disorder, with 14% being adolescents. Since 2005, studies in game development have shown the positive potential of games in addressing mental health issues. Based on this, the web platform 'Asta vs The Demons' was created, featuring a Visual Novel game designed to offer an immersive experience of empathy and identification through a protagonist who explores themes such as mental disorders and psychosomatic symptoms. The front-end was developed using HTML, CSS, JavaScript, TailwindCSS, and RenJS, while the back-end uses Node.js with the Express framework and PostgreSQL for database management. The application was published on the indie game platform itch.io, along with a user experience survey that received over 40 responses, highlighting the meaningful impact of the project. The findings suggest that the game has a promising purpose, sensitively addressing the complexities of the human mind and fostering awareness and identification—key elements in the treatment of mental disorders.",
    link: "https://cybergirllll.itch.io/asta-vs-the-demons",
  },
    {
    image:"./public/projects/gyarugirls.png",
    title: "GyaruGirls - A kawaii social network",
    date: "2024",
    description: "GyarUGirls is a social network developed in pure PHP, inspired by Japanese websites from the 2000s, Tumblr blogs, and with a touch of Twitter. The project recreates the nostalgic aesthetics and experience of retro internet culture, focusing on Japanese *gyaru* culture. It offers users a personalized space to create profiles, post updates, edit personal information, and interact with other members. The application was built using pure PHP without any frameworks, with PHP files handling features like user registration, login, profile editing, post feed, and photo uploads. The code is organized into folders such as `client`, `server`, and `docs`, and the project is available on GitHub under the MIT license. It’s ideal for those who appreciate Y2K aesthetics and want to explore a social network with a vintage, creative atmosphere.",
    link: "https://github.com/aloneinthecityy/GyarUGirls",
  },
  {
    image:"./public/projects/blog.png",
    title: "Personal Blog - Astro and TinyCMS Integrated",
    date: "2023",
    description: "Personal Blog with Astro and TinyCMS is a static blog project developed using the Astro framework, integrated with TinyCMS for content management. The project uses TailwindCSS for styling and is configured for deployment on Vercel. The repository structure includes folders such as `src`, `public`, and `tina`, along with configuration files for tools like ESLint, Prettier, and TypeScript. The code is available on GitHub under the GPL-3.0 license.",
    link: "https://mariafeiavampira.vercel.app/",
  }
];

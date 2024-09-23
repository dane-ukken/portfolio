import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://dane-ukken.dev/", // replace this with your deployed domain
  author: "Sat Naing",
  profile: "https://dane-ukken.dev/",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  title: "Hi, I am Dane Ukken!",
  ogImage: "unofficial_pic.png",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: true,
  svg: false,
  width: 50,
  height: 50,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/dane-ukken",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/dane-ukken/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "ukkendane@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "X",
    href: "https://x.com/ukkendane",
    linkTitle: `${SITE.title} on X`,
    active: true,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/16823746297",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: true,
  },
  {
    name: "Discord",
    href: "username:coding_padawan",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
];

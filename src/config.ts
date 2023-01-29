import type { SocialObjects } from "./types";

export const SITE = {
  website: "https://clough.cloud/",
  author: "Ryan Clough",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  title: "Ryan Clough",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/cloughrm/",
    linkTitle: `${SITE.author} on LinkedIn`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/hotF1X",
    linkTitle: `${SITE.author} on Twitter`,
    active: true,
  },
  {
    name: "Github",
    href: "https://github.com/cloughrm",
    linkTitle: ` ${SITE.author} on Github`,
    active: true,
  },
  {
    name: "CodePen",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.author} on CodePen`,
    active: false,
  },
  {
    name: "Reddit",
    href: "https://www.reddit.com/user/h0tf1x",
    linkTitle: `${SITE.author} on Reddit`,
    active: true,
  },
];

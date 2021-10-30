import { TimelineData } from "../components/VerticalTimeline";

import {
  ImageAVPN,
  ImageDBO,
  ImageInsights,
  ImagePruhub,
  ImageVisionUI,
} from "../assets";

export type PersonalProject = {
  name: string;
  description: string;
  usedTechnologies: string;
  githubLink: string;
  projectLink?: string;
};

export const personalProjects: Array<PersonalProject> = [
  {
    name: "Pokedex-XYZ",
    description:
      " This is a simple PokeDex application where you can view and catch Pokémon.",
    usedTechnologies:
      "Typescript, React, Lottie, Apollo, GraphQL, Emotion, Jest",
    githubLink: "https://github.com/andreirawan97/pokedex-xyz",
    projectLink: "https://pokedex-xyz.netlify.app",
  },
  {
    name: "Fluid React Native",
    description: "A simple wrapper to animate your React Native component.",
    usedTechnologies: "Typescript, React Native",
    githubLink: "https://github.com/andreirawan97/FluidReactNative",
  },
];

export const works: Array<TimelineData> = [
  {
    title: "Inventory App",
    organizationName: "70 Farenheit Koffie",
    description: "Making a simple inventory app for managing stock.",
    date: "January 2017-July 2017",
  },
  {
    title: "AVPN 2019",
    organizationName: "KodeFox, Inc",
    description:
      "AVPN is a conference app that helps attendance to view venue, chat with speaker, and see schedules",
    date: "April 2019 - July 2019",
    image: ImageAVPN,
  },
  {
    title: "Vision-UI",
    organizationName: "KodeFox, Inc",
    description:
      "Vision-UI is a framework for rendering mobile apps using JSON.",
    date: "July 2019 - October 2019",
    image: ImageVisionUI,
  },
  {
    title: "Insights",
    organizationName: "KodeFox, Inc",
    description:
      "Insights is a web app that helps Project Manager to track project and helps Client to see their app status and progress.",
    date: "October 2019 - December 2019",
    image: ImageInsights,
  },
  {
    title: "PruHub",
    organizationName: "KodeFox, Inc",
    description: "Developing Prudential internal application using Vision-UI.",
    date: "January 2020 - August 2020",
    image: ImagePruhub,
  },
  {
    title: "DBO",
    organizationName: "KodeFox, Inc",
    description:
      "DBO or Depo Bangunan Online is an app to help business owner to procure stuffs.",
    date: "February 2021 - September 2021",
    image: ImageDBO,
    link: "https://play.google.com/store/apps/details?id=com.dbo.newdboindonesiahd&hl=en&gl=US",
  },
  {
    title: "Corporate Technology Apps",
    organizationName: "Traveloka",
    description: "Working on various Corporate Technology applications.",
    date: "September 2021 - Present",
  },
];

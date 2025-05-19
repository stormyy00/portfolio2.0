import bigbear from "../../public/landing.jpg";
import enter from "../../public/photography/vision/enter.webp";
import heart from "../../public/photography/vision/heart.webp";
import plants from "../../public/photography/vision/plants.webp";
import purple from "../../public/photography/vision/purple.webp";
import wall from "../../public/photography/vision/wall.webp";
import jerry from "../../public/photography/portraits/jerry.webp";
import menthy from "../../public/photography/portraits/menthy.webp";
import theo from "../../public/photography/vision/theo.webp";
import river from "../../public/photography/seattle/river.webp";
import beach from "../../public/photography/landscapes/beach.webp";
import flower from "../../public/photography/landscapes/flowers.webp";
import sign from "../../public/photography/vision/sign.webp";
import cart from "../../public/photography/vision/cart.webp";

export const GALLERY = [
  {
    name: "My Vision",
    image: [theo, enter, heart, plants, purple, wall, sign, cart],
    link: "me",
    type: "landscape",
  },
  {
    name: "Graduation",
    image: [bigbear],
    link: "graduation",
    type: "portrait",
  },
  {
    name: "Portraits",
    image: [jerry, menthy],
    link: "Portraits",
    type: "portrait",
  },
  {
    name: "Landscapes",
    image: [flower, beach],
    link: "landscapes",
    type: "landscape",
  },
  {
    name: "Flower Fields",
    image: [bigbear],
    link: "big-bear",
    type: "landscape",
  },
  {
    name: "Headshots",
    image: [bigbear],
    link: "headshots",
    type: "portrait",
  },
  {
    name: "Beach",
    image: [bigbear],
    link: "beach",
    type: "landscape",
  },
  {
    name: "Seattle",
    image: [river],
    link: "seattle",
    type: "landscape",
  },
];

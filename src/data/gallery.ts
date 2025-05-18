import bigbear from "../../public/landing.jpg";
import enter from "../../public/photography/vision/enter.jpg";
import heart from "../../public/photography/vision/heart.jpg";
import plants from "../../public/photography/vision/plants.jpg";
import purple from "../../public/photography/vision/purple.jpg";
import wall from "../../public/photography/vision/wall.jpg";
import jerry from "../../public/photography/portraits/jerry.jpg";

export const GALLERY = [
  {
    name: "My Vision",
    image: [enter, heart, plants, purple, wall],
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
    image: [jerry],
    link: "Portraits",
    type: "portrait",
  },
  {
    name: "Landscapes",
    image: [bigbear],
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
    image: [bigbear],
    link: "seattle",
    type: "landscape",
  },
];

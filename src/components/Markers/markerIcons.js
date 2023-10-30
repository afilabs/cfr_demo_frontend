import StartIcon from "./icons/start";
import EndIcon from "./icons/end";
import PickupIcon from "./icons/pickup";
import DropoffIcon from "./icons/dropoff";

import { COLORS } from "../../constants";

const markerIcons = {
  start: {},
  end: {},
  pickup: {},
  delivery: {},
};

const icons = {
  start: StartIcon,
  end: EndIcon,
  pickup: PickupIcon,
  delivery: DropoffIcon,
};

export const imageMaker = (color, type) => {
  return (
    "data:image/svg+xml;charset=utf-8;base64," +
    btoa(unescape(encodeURIComponent(icons[type](color))))
  );
};

COLORS.forEach((color) => {
  [
    "start",
    "end",
    "pickup",
    "delivery",
  ].forEach((type) => {
    markerIcons[type][color] = imageMaker(`#${color}`, type);
  });
});

export default markerIcons;

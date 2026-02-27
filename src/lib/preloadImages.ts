// Eagerly preload ALL images used across the site so they're instantly available on any route.

import hokuLogo from "@/assets/hoku-logo-new.png";
import hokuLogoClean from "@/assets/hoku-logo-clean.png";
import hokuLogoNobg from "@/assets/hoku-logo-nobg.png";
import hokuLogoPng from "@/assets/hoku-logo.png";
import hawaiiIsland from "@/assets/hawaii-island.png";
import hawaiiIslandStars from "@/assets/hawaii-island-stars.png";
import heroBg from "@/assets/hero-bg.jpg";
import businessTeam from "@/assets/business-team.jpg";
import hawaiiHome from "@/assets/hawaii-home.jpg";
import hawaiiProperty from "@/assets/hawaii-property.jpg";
import riskStrategy from "@/assets/risk-strategy.jpg";
import hawaiiBeach from "@/assets/hawaii-beach.jpg";
import teamMeeting from "@/assets/team-meeting.jpg";
import hawaiiLavaStars from "@/assets/hawaii-lava-stars.jpg";
import hawaiiCliffs from "@/assets/hawaii-cliffs.jpg";
import hawaiiCoast from "@/assets/hawaii-coast.jpg";
import hawaiiStars from "@/assets/hawaii-stars.jpg";
import propertyKeys from "@/assets/property-keys.jpg";
import constellation1 from "@/assets/constellation-1.png";
import constellation2 from "@/assets/constellation-2.png";

const allImages = [
  hokuLogo,
  hokuLogoClean,
  hokuLogoNobg,
  hokuLogoPng,
  hawaiiIsland,
  hawaiiIslandStars,
  heroBg,
  businessTeam,
  hawaiiHome,
  hawaiiProperty,
  riskStrategy,
  hawaiiBeach,
  teamMeeting,
  hawaiiLavaStars,
  hawaiiCliffs,
  hawaiiCoast,
  hawaiiStars,
  propertyKeys,
  constellation1,
  constellation2,
];

export function preloadAllImages() {
  allImages.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}

"use client";

import {
  RiInstagramFill,
  RiLinkedinFill,
  RiGithubFill,
  RiTwitterXFill,
  RiYoutubeFill,
} from "react-icons/ri";

import Link from "next/link";

// icons for the current user and the current user's profile

const icons = [
  {
    path: "https://www.instagram.com/ap_singh09",
    name: <RiInstagramFill />,
  },
  {
    path: "https://github.com/AkshayPratapSingh09",
    name: <RiGithubFill />,
  },
  {
    path: "https://twitter.com/AkshayPSingh09",
    name: <RiTwitterXFill />,
  },
  {
    path: "https://www.linkedin.com/in/akshaypratap09",
    name: <RiLinkedinFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
